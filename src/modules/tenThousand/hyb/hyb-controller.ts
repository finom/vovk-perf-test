import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyb")
export default class HybController {
  @operation({
    summary: "Get Hyb",
  })
  @get()
  static getHyb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyb",
  })
  @post("{id}")
  static createHyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
