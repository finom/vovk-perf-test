import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkh")
export default class LkhController {
  @operation({
    summary: "Get Lkh",
  })
  @get()
  static getLkh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkh",
  })
  @post("{id}")
  static createLkh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
