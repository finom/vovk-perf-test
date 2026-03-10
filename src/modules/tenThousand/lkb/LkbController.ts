import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkb")
export default class LkbController {
  @operation({
    summary: "Get Lkb",
  })
  @get()
  static getLkb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lkb",
  })
  @post("{id}")
  static createLkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
