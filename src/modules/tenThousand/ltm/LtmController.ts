import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltm")
export default class LtmController {
  @operation({
    summary: "Get Ltm",
  })
  @get()
  static getLtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltm",
  })
  @post("{id}")
  static createLtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
