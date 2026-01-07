import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pe")
export default class PeController {
  @operation({
    summary: "Get Pe",
  })
  @get()
  static getPe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pe",
  })
  @post("{id}")
  static createPe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
