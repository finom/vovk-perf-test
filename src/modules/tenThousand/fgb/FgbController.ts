import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgb")
export default class FgbController {
  @operation({
    summary: "Get Fgb",
  })
  @get()
  static getFgb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgb",
  })
  @post("{id}")
  static createFgb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
