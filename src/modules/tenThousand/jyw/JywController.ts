import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyw")
export default class JywController {
  @operation({
    summary: "Get Jyw",
  })
  @get()
  static getJyw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyw",
  })
  @post("{id}")
  static createJyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
