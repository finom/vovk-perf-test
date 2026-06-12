import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yu")
export default class YuController {
  @operation({
    summary: "Get Yu",
  })
  @get()
  static getYu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yu",
  })
  @post("{id}")
  static createYu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
