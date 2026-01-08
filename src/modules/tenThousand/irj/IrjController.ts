import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irj")
export default class IrjController {
  @operation({
    summary: "Get Irj",
  })
  @get()
  static getIrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irj",
  })
  @post("{id}")
  static createIrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
