import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
