import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfc")
export default class DfcController {
  @operation({
    summary: "Get Dfc",
  })
  @get()
  static getDfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfc",
  })
  @post("{id}")
  static createDfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
