import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fen")
export default class FenController {
  @operation({
    summary: "Get Fen",
  })
  @get()
  static getFen = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fen",
  })
  @post("{id}")
  static createFen = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
