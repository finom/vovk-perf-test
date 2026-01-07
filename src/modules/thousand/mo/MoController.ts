import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mo")
export default class MoController {
  @operation({
    summary: "Get Mo",
  })
  @get()
  static getMo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mo",
  })
  @post("{id}")
  static createMo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
