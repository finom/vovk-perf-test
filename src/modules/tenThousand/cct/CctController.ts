import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cct")
export default class CctController {
  @operation({
    summary: "Get Cct",
  })
  @get()
  static getCct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cct",
  })
  @post("{id}")
  static createCct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
