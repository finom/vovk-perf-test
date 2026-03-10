import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmm")
export default class JmmController {
  @operation({
    summary: "Get Jmm",
  })
  @get()
  static getJmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jmm",
  })
  @post("{id}")
  static createJmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
