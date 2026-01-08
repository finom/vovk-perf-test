import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmc")
export default class DmcController {
  @operation({
    summary: "Get Dmc",
  })
  @get()
  static getDmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmc",
  })
  @post("{id}")
  static createDmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
