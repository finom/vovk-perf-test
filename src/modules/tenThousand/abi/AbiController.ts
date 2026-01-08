import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abi")
export default class AbiController {
  @operation({
    summary: "Get Abi",
  })
  @get()
  static getAbi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abi",
  })
  @post("{id}")
  static createAbi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
