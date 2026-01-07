import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noi")
export default class NoiController {
  @operation({
    summary: "Get Noi",
  })
  @get()
  static getNoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noi",
  })
  @post("{id}")
  static createNoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
