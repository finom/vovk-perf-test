import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drp")
export default class DrpController {
  @operation({
    summary: "Get Drp",
  })
  @get()
  static getDrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drp",
  })
  @post("{id}")
  static createDrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
