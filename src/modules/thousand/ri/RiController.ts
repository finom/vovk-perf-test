import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ri")
export default class RiController {
  @operation({
    summary: "Get Ri",
  })
  @get()
  static getRi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ri",
  })
  @post("{id}")
  static createRi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
