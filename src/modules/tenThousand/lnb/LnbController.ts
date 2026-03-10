import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnb")
export default class LnbController {
  @operation({
    summary: "Get Lnb",
  })
  @get()
  static getLnb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnb",
  })
  @post("{id}")
  static createLnb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
