import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfp")
export default class KfpController {
  @operation({
    summary: "Get Kfp",
  })
  @get()
  static getKfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfp",
  })
  @post("{id}")
  static createKfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
