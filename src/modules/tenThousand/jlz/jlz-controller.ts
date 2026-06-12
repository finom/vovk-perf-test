import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlz")
export default class JlzController {
  @operation({
    summary: "Get Jlz",
  })
  @get()
  static getJlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlz",
  })
  @post("{id}")
  static createJlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
