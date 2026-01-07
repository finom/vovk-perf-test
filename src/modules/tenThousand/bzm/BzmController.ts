import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzm")
export default class BzmController {
  @operation({
    summary: "Get Bzm",
  })
  @get()
  static getBzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzm",
  })
  @post("{id}")
  static createBzm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
