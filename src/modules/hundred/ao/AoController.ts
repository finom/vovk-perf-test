import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ao")
export default class AoController {
  @operation({
    summary: "Get Ao",
  })
  @get()
  static getAo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ao",
  })
  @post("{id}")
  static createAo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
