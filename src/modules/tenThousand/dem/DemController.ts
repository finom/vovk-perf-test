import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dem")
export default class DemController {
  @operation({
    summary: "Get Dem",
  })
  @get()
  static getDem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dem",
  })
  @post("{id}")
  static createDem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
