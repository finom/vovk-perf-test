import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ko")
export default class KoController {
  @operation({
    summary: "Get Ko",
  })
  @get()
  static getKo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ko",
  })
  @post("{id}")
  static createKo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
