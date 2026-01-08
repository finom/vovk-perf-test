import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irq")
export default class IrqController {
  @operation({
    summary: "Get Irq",
  })
  @get()
  static getIrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irq",
  })
  @post("{id}")
  static createIrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
