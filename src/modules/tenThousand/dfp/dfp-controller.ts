import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfp")
export default class DfpController {
  @operation({
    summary: "Get Dfp",
  })
  @get()
  static getDfp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dfp",
  })
  @post("{id}")
  static createDfp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
