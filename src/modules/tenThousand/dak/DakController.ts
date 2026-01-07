import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dak")
export default class DakController {
  @operation({
    summary: "Get Dak",
  })
  @get()
  static getDak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dak",
  })
  @post("{id}")
  static createDak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
