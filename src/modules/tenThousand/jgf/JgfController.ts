import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jgf")
export default class JgfController {
  @operation({
    summary: "Get Jgf",
  })
  @get()
  static getJgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jgf",
  })
  @post("{id}")
  static createJgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
