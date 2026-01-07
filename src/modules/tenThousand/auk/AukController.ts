import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auk")
export default class AukController {
  @operation({
    summary: "Get Auk",
  })
  @get()
  static getAuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auk",
  })
  @post("{id}")
  static createAuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
