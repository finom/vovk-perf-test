import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drq")
export default class DrqController {
  @operation({
    summary: "Get Drq",
  })
  @get()
  static getDrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drq",
  })
  @post("{id}")
  static createDrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
