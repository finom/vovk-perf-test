import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwy")
export default class DwyController {
  @operation({
    summary: "Get Dwy",
  })
  @get()
  static getDwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwy",
  })
  @post("{id}")
  static createDwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
