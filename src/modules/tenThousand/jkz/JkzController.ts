import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkz")
export default class JkzController {
  @operation({
    summary: "Get Jkz",
  })
  @get()
  static getJkz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jkz",
  })
  @post("{id}")
  static createJkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
