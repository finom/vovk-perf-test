import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sr")
export default class SrController {
  @operation({
    summary: "Get Sr",
  })
  @get()
  static getSr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sr",
  })
  @post("{id}")
  static createSr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
