import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtm")
export default class GtmController {
  @operation({
    summary: "Get Gtm",
  })
  @get()
  static getGtm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtm",
  })
  @post("{id}")
  static createGtm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
