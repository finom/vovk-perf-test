import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ced")
export default class CedController {
  @operation({
    summary: "Get Ced",
  })
  @get()
  static getCed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ced",
  })
  @post("{id}")
  static createCed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
