import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsc")
export default class DscController {
  @operation({
    summary: "Get Dsc",
  })
  @get()
  static getDsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsc",
  })
  @post("{id}")
  static createDsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
