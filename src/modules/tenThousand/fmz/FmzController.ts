import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmz")
export default class FmzController {
  @operation({
    summary: "Get Fmz",
  })
  @get()
  static getFmz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmz",
  })
  @post("{id}")
  static createFmz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
