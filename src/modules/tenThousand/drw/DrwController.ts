import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drw")
export default class DrwController {
  @operation({
    summary: "Get Drw",
  })
  @get()
  static getDrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drw",
  })
  @post("{id}")
  static createDrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
