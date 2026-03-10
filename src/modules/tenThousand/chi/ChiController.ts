import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chi")
export default class ChiController {
  @operation({
    summary: "Get Chi",
  })
  @get()
  static getChi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chi",
  })
  @post("{id}")
  static createChi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
