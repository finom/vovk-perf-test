import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lro")
export default class LroController {
  @operation({
    summary: "Get Lro",
  })
  @get()
  static getLro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lro",
  })
  @post("{id}")
  static createLro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
