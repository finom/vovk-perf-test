import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coe")
export default class CoeController {
  @operation({
    summary: "Get Coe",
  })
  @get()
  static getCoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coe",
  })
  @post("{id}")
  static createCoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
