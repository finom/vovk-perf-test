import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngk")
export default class NgkController {
  @operation({
    summary: "Get Ngk",
  })
  @get()
  static getNgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngk",
  })
  @post("{id}")
  static createNgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
