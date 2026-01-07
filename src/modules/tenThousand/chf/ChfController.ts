import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chf")
export default class ChfController {
  @operation({
    summary: "Get Chf",
  })
  @get()
  static getChf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Chf",
  })
  @post("{id}")
  static createChf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
