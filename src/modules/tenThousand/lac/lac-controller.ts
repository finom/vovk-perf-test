import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lac")
export default class LacController {
  @operation({
    summary: "Get Lac",
  })
  @get()
  static getLac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lac",
  })
  @post("{id}")
  static createLac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
