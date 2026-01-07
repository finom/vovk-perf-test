import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dll")
export default class DllController {
  @operation({
    summary: "Get Dll",
  })
  @get()
  static getDll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dll",
  })
  @post("{id}")
  static createDll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
