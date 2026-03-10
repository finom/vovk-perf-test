import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffv")
export default class FfvController {
  @operation({
    summary: "Get Ffv",
  })
  @get()
  static getFfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffv",
  })
  @post("{id}")
  static createFfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
