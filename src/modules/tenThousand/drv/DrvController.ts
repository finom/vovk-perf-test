import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drv")
export default class DrvController {
  @operation({
    summary: "Get Drv",
  })
  @get()
  static getDrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drv",
  })
  @post("{id}")
  static createDrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
