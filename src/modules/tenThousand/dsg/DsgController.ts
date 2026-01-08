import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsg")
export default class DsgController {
  @operation({
    summary: "Get Dsg",
  })
  @get()
  static getDsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsg",
  })
  @post("{id}")
  static createDsg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
