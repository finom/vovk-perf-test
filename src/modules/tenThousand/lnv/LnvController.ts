import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnv")
export default class LnvController {
  @operation({
    summary: "Get Lnv",
  })
  @get()
  static getLnv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnv",
  })
  @post("{id}")
  static createLnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
