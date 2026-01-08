import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crc")
export default class CrcController {
  @operation({
    summary: "Get Crc",
  })
  @get()
  static getCrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crc",
  })
  @post("{id}")
  static createCrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
