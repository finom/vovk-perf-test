import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jli")
export default class JliController {
  @operation({
    summary: "Get Jli",
  })
  @get()
  static getJli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jli",
  })
  @post("{id}")
  static createJli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
