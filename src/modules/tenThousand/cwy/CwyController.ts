import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwy")
export default class CwyController {
  @operation({
    summary: "Get Cwy",
  })
  @get()
  static getCwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwy",
  })
  @post("{id}")
  static createCwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
