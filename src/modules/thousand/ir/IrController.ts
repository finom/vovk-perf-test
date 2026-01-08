import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ir")
export default class IrController {
  @operation({
    summary: "Get Ir",
  })
  @get()
  static getIr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ir",
  })
  @post("{id}")
  static createIr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
