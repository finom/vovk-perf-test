import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmv")
export default class FmvController {
  @operation({
    summary: "Get Fmv",
  })
  @get()
  static getFmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmv",
  })
  @post("{id}")
  static createFmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
