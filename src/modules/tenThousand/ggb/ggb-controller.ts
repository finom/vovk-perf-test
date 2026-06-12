import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggb")
export default class GgbController {
  @operation({
    summary: "Get Ggb",
  })
  @get()
  static getGgb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggb",
  })
  @post("{id}")
  static createGgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
