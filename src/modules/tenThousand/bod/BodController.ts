import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bod")
export default class BodController {
  @operation({
    summary: "Get Bod",
  })
  @get()
  static getBod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bod",
  })
  @post("{id}")
  static createBod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
