import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwa")
export default class LwaController {
  @operation({
    summary: "Get Lwa",
  })
  @get()
  static getLwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwa",
  })
  @post("{id}")
  static createLwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
