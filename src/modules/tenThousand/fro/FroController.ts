import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fro")
export default class FroController {
  @operation({
    summary: "Get Fro",
  })
  @get()
  static getFro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fro",
  })
  @post("{id}")
  static createFro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
