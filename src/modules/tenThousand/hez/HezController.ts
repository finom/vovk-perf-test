import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hez")
export default class HezController {
  @operation({
    summary: "Get Hez",
  })
  @get()
  static getHez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hez",
  })
  @post("{id}")
  static createHez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
