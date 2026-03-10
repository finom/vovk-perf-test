import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjg")
export default class JjgController {
  @operation({
    summary: "Get Jjg",
  })
  @get()
  static getJjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jjg",
  })
  @post("{id}")
  static createJjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
