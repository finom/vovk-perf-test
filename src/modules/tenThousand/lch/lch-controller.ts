import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lch")
export default class LchController {
  @operation({
    summary: "Get Lch",
  })
  @get()
  static getLch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lch",
  })
  @post("{id}")
  static createLch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
