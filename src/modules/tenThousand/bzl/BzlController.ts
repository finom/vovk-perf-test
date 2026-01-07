import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzl")
export default class BzlController {
  @operation({
    summary: "Get Bzl",
  })
  @get()
  static getBzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzl",
  })
  @post("{id}")
  static createBzl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
