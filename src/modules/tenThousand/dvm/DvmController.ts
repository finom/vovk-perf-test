import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvm")
export default class DvmController {
  @operation({
    summary: "Get Dvm",
  })
  @get()
  static getDvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvm",
  })
  @post("{id}")
  static createDvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
