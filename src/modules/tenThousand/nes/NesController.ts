import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nes")
export default class NesController {
  @operation({
    summary: "Get Nes",
  })
  @get()
  static getNes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nes",
  })
  @post("{id}")
  static createNes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
