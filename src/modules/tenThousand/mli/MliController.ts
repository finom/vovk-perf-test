import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mli")
export default class MliController {
  @operation({
    summary: "Get Mli",
  })
  @get()
  static getMli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mli",
  })
  @post("{id}")
  static createMli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
