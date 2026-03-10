import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtm")
export default class MtmController {
  @operation({
    summary: "Get Mtm",
  })
  @get()
  static getMtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtm",
  })
  @post("{id}")
  static createMtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
