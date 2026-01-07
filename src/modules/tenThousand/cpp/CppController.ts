import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpp")
export default class CppController {
  @operation({
    summary: "Get Cpp",
  })
  @get()
  static getCpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpp",
  })
  @post("{id}")
  static createCpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
