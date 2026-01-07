import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhx")
export default class LhxController {
  @operation({
    summary: "Get Lhx",
  })
  @get()
  static getLhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhx",
  })
  @post("{id}")
  static createLhx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
