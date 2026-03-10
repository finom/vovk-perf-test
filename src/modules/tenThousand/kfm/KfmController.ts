import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfm")
export default class KfmController {
  @operation({
    summary: "Get Kfm",
  })
  @get()
  static getKfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kfm",
  })
  @post("{id}")
  static createKfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
