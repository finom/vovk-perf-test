import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vm")
export default class VmController {
  @operation({
    summary: "Get Vm",
  })
  @get()
  static getVm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vm",
  })
  @post("{id}")
  static createVm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
