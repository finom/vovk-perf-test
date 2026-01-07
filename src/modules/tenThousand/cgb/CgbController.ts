import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgb")
export default class CgbController {
  @operation({
    summary: "Get Cgb",
  })
  @get()
  static getCgb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgb",
  })
  @post("{id}")
  static createCgb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
