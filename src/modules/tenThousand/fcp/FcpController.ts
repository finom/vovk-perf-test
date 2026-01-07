import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcp")
export default class FcpController {
  @operation({
    summary: "Get Fcp",
  })
  @get()
  static getFcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcp",
  })
  @post("{id}")
  static createFcp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
