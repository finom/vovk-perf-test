import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgk")
export default class DgkController {
  @operation({
    summary: "Get Dgk",
  })
  @get()
  static getDgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dgk",
  })
  @post("{id}")
  static createDgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
