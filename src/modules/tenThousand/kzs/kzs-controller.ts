import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzs")
export default class KzsController {
  @operation({
    summary: "Get Kzs",
  })
  @get()
  static getKzs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzs",
  })
  @post("{id}")
  static createKzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
