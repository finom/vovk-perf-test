import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fux")
export default class FuxController {
  @operation({
    summary: "Get Fux",
  })
  @get()
  static getFux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fux",
  })
  @post("{id}")
  static createFux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
