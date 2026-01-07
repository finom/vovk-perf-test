import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igf")
export default class IgfController {
  @operation({
    summary: "Get Igf",
  })
  @get()
  static getIgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igf",
  })
  @post("{id}")
  static createIgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
