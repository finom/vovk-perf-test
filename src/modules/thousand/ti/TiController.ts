import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ti")
export default class TiController {
  @operation({
    summary: "Get Ti",
  })
  @get()
  static getTi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ti",
  })
  @post("{id}")
  static createTi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
