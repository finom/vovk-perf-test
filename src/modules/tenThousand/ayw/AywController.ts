import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayw")
export default class AywController {
  @operation({
    summary: "Get Ayw",
  })
  @get()
  static getAyw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayw",
  })
  @post("{id}")
  static createAyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
