import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igc")
export default class IgcController {
  @operation({
    summary: "Get Igc",
  })
  @get()
  static getIgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igc",
  })
  @post("{id}")
  static createIgc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
