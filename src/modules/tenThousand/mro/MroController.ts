import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mro")
export default class MroController {
  @operation({
    summary: "Get Mro",
  })
  @get()
  static getMro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mro",
  })
  @post("{id}")
  static createMro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
