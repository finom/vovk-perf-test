import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mun")
export default class MunController {
  @operation({
    summary: "Get Mun",
  })
  @get()
  static getMun = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mun",
  })
  @post("{id}")
  static createMun = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
