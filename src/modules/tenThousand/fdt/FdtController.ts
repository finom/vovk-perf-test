import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdt")
export default class FdtController {
  @operation({
    summary: "Get Fdt",
  })
  @get()
  static getFdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdt",
  })
  @post("{id}")
  static createFdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
