import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fly")
export default class FlyController {
  @operation({
    summary: "Get Fly",
  })
  @get()
  static getFly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fly",
  })
  @post("{id}")
  static createFly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
