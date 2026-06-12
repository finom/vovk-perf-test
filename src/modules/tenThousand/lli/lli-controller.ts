import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lli")
export default class LliController {
  @operation({
    summary: "Get Lli",
  })
  @get()
  static getLli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lli",
  })
  @post("{id}")
  static createLli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
