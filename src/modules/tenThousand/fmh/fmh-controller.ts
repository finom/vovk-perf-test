import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmh")
export default class FmhController {
  @operation({
    summary: "Get Fmh",
  })
  @get()
  static getFmh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmh",
  })
  @post("{id}")
  static createFmh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
