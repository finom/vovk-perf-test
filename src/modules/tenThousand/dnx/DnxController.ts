import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnx")
export default class DnxController {
  @operation({
    summary: "Get Dnx",
  })
  @get()
  static getDnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnx",
  })
  @post("{id}")
  static createDnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
