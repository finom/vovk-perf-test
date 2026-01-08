import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bit")
export default class BitController {
  @operation({
    summary: "Get Bit",
  })
  @get()
  static getBit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bit",
  })
  @post("{id}")
  static createBit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
