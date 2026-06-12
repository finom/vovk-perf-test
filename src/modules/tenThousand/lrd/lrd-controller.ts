import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrd")
export default class LrdController {
  @operation({
    summary: "Get Lrd",
  })
  @get()
  static getLrd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrd",
  })
  @post("{id}")
  static createLrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
