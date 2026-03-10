import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcv")
export default class KcvController {
  @operation({
    summary: "Get Kcv",
  })
  @get()
  static getKcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kcv",
  })
  @post("{id}")
  static createKcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
