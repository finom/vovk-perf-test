import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnf")
export default class DnfController {
  @operation({
    summary: "Get Dnf",
  })
  @get()
  static getDnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnf",
  })
  @post("{id}")
  static createDnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
