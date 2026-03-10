import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmj")
export default class FmjController {
  @operation({
    summary: "Get Fmj",
  })
  @get()
  static getFmj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmj",
  })
  @post("{id}")
  static createFmj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
