import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnl")
export default class LnlController {
  @operation({
    summary: "Get Lnl",
  })
  @get()
  static getLnl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnl",
  })
  @post("{id}")
  static createLnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
