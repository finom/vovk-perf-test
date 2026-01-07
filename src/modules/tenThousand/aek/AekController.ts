import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aek")
export default class AekController {
  @operation({
    summary: "Get Aek",
  })
  @get()
  static getAek = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aek",
  })
  @post("{id}")
  static createAek = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
