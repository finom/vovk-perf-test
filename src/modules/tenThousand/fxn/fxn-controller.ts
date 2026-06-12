import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxn")
export default class FxnController {
  @operation({
    summary: "Get Fxn",
  })
  @get()
  static getFxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fxn",
  })
  @post("{id}")
  static createFxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
