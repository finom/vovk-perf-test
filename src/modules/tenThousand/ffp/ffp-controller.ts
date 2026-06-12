import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffp")
export default class FfpController {
  @operation({
    summary: "Get Ffp",
  })
  @get()
  static getFfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffp",
  })
  @post("{id}")
  static createFfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
