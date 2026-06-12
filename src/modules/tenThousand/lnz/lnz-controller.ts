import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnz")
export default class LnzController {
  @operation({
    summary: "Get Lnz",
  })
  @get()
  static getLnz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lnz",
  })
  @post("{id}")
  static createLnz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
