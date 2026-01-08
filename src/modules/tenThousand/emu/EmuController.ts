import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emu")
export default class EmuController {
  @operation({
    summary: "Get Emu",
  })
  @get()
  static getEmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emu",
  })
  @post("{id}")
  static createEmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
