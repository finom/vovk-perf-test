import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lku")
export default class LkuController {
  @operation({
    summary: "Get Lku",
  })
  @get()
  static getLku = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lku",
  })
  @post("{id}")
  static createLku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
