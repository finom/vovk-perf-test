import { procedure, prefix, get, post, operation } from "vovk";

@prefix("far")
export default class FarController {
  @operation({
    summary: "Get Far",
  })
  @get()
  static getFar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Far",
  })
  @post("{id}")
  static createFar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
