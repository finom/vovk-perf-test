import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvi")
export default class CviController {
  @operation({
    summary: "Get Cvi",
  })
  @get()
  static getCvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvi",
  })
  @post("{id}")
  static createCvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
