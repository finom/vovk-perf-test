import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltx")
export default class LtxController {
  @operation({
    summary: "Get Ltx",
  })
  @get()
  static getLtx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltx",
  })
  @post("{id}")
  static createLtx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
