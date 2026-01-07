import { procedure, prefix, get, post, operation } from "vovk";

@prefix("di")
export default class DiController {
  @operation({
    summary: "Get Di",
  })
  @get()
  static getDi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Di",
  })
  @post("{id}")
  static createDi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
