import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bez")
export default class BezController {
  @operation({
    summary: "Get Bez",
  })
  @get()
  static getBez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bez",
  })
  @post("{id}")
  static createBez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
