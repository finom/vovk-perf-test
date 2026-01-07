import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyc")
export default class CycController {
  @operation({
    summary: "Get Cyc",
  })
  @get()
  static getCyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyc",
  })
  @post("{id}")
  static createCyc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
