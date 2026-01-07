import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvm")
export default class KvmController {
  @operation({
    summary: "Get Kvm",
  })
  @get()
  static getKvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvm",
  })
  @post("{id}")
  static createKvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
