import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cel")
export default class CelController {
  @operation({
    summary: "Get Cel",
  })
  @get()
  static getCel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cel",
  })
  @post("{id}")
  static createCel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
