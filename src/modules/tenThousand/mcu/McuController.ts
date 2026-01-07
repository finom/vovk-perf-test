import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcu")
export default class McuController {
  @operation({
    summary: "Get Mcu",
  })
  @get()
  static getMcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mcu",
  })
  @post("{id}")
  static createMcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
