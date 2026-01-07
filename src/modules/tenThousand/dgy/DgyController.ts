import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgy")
export default class DgyController {
  @operation({
    summary: "Get Dgy",
  })
  @get()
  static getDgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgy",
  })
  @post("{id}")
  static createDgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
