import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hex")
export default class HexController {
  @operation({
    summary: "Get Hex",
  })
  @get()
  static getHex = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hex",
  })
  @post("{id}")
  static createHex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
