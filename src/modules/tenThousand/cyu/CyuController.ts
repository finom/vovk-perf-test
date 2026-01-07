import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyu")
export default class CyuController {
  @operation({
    summary: "Get Cyu",
  })
  @get()
  static getCyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyu",
  })
  @post("{id}")
  static createCyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
