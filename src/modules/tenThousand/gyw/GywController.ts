import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyw")
export default class GywController {
  @operation({
    summary: "Get Gyw",
  })
  @get()
  static getGyw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyw",
  })
  @post("{id}")
  static createGyw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
