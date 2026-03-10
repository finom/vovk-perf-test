import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzs")
export default class MzsController {
  @operation({
    summary: "Get Mzs",
  })
  @get()
  static getMzs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzs",
  })
  @post("{id}")
  static createMzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
