import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mis")
export default class MisController {
  @operation({
    summary: "Get Mis",
  })
  @get()
  static getMis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mis",
  })
  @post("{id}")
  static createMis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
