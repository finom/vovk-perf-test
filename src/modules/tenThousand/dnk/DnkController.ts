import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnk")
export default class DnkController {
  @operation({
    summary: "Get Dnk",
  })
  @get()
  static getDnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnk",
  })
  @post("{id}")
  static createDnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
