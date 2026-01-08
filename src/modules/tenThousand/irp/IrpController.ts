import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irp")
export default class IrpController {
  @operation({
    summary: "Get Irp",
  })
  @get()
  static getIrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irp",
  })
  @post("{id}")
  static createIrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
