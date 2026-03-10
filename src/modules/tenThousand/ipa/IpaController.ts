import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipa")
export default class IpaController {
  @operation({
    summary: "Get Ipa",
  })
  @get()
  static getIpa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipa",
  })
  @post("{id}")
  static createIpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
