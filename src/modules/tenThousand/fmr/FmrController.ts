import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmr")
export default class FmrController {
  @operation({
    summary: "Get Fmr",
  })
  @get()
  static getFmr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmr",
  })
  @post("{id}")
  static createFmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
