import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lew")
export default class LewController {
  @operation({
    summary: "Get Lew",
  })
  @get()
  static getLew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lew",
  })
  @post("{id}")
  static createLew = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
