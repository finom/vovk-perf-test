import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsg")
export default class LsgController {
  @operation({
    summary: "Get Lsg",
  })
  @get()
  static getLsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsg",
  })
  @post("{id}")
  static createLsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
