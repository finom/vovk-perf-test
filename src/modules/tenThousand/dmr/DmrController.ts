import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmr")
export default class DmrController {
  @operation({
    summary: "Get Dmr",
  })
  @get()
  static getDmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmr",
  })
  @post("{id}")
  static createDmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
