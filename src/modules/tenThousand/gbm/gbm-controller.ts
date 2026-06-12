import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbm")
export default class GbmController {
  @operation({
    summary: "Get Gbm",
  })
  @get()
  static getGbm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbm",
  })
  @post("{id}")
  static createGbm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
