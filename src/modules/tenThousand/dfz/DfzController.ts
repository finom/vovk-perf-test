import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfz")
export default class DfzController {
  @operation({
    summary: "Get Dfz",
  })
  @get()
  static getDfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfz",
  })
  @post("{id}")
  static createDfz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
