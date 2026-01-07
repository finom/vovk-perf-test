import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hct")
export default class HctController {
  @operation({
    summary: "Get Hct",
  })
  @get()
  static getHct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hct",
  })
  @post("{id}")
  static createHct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
