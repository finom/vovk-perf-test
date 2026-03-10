import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmp")
export default class KmpController {
  @operation({
    summary: "Get Kmp",
  })
  @get()
  static getKmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmp",
  })
  @post("{id}")
  static createKmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
