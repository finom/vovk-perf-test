import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jzs")
export default class JzsController {
  @operation({
    summary: "Get Jzs",
  })
  @get()
  static getJzs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jzs",
  })
  @post("{id}")
  static createJzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
