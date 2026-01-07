import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eil")
export default class EilController {
  @operation({
    summary: "Get Eil",
  })
  @get()
  static getEil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eil",
  })
  @post("{id}")
  static createEil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
