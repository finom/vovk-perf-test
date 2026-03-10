import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmp")
export default class FmpController {
  @operation({
    summary: "Get Fmp",
  })
  @get()
  static getFmp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmp",
  })
  @post("{id}")
  static createFmp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
