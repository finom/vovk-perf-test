import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmn")
export default class FmnController {
  @operation({
    summary: "Get Fmn",
  })
  @get()
  static getFmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmn",
  })
  @post("{id}")
  static createFmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
