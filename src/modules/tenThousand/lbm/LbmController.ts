import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbm")
export default class LbmController {
  @operation({
    summary: "Get Lbm",
  })
  @get()
  static getLbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lbm",
  })
  @post("{id}")
  static createLbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
