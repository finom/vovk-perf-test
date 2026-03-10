import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fus")
export default class FusController {
  @operation({
    summary: "Get Fus",
  })
  @get()
  static getFus = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fus",
  })
  @post("{id}")
  static createFus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
