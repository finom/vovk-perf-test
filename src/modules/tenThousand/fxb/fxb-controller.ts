import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxb")
export default class FxbController {
  @operation({
    summary: "Get Fxb",
  })
  @get()
  static getFxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxb",
  })
  @post("{id}")
  static createFxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
