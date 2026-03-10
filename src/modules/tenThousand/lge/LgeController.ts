import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lge")
export default class LgeController {
  @operation({
    summary: "Get Lge",
  })
  @get()
  static getLge = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lge",
  })
  @post("{id}")
  static createLge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
