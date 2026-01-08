import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evm")
export default class EvmController {
  @operation({
    summary: "Get Evm",
  })
  @get()
  static getEvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evm",
  })
  @post("{id}")
  static createEvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
