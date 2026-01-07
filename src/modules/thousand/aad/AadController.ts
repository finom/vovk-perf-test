import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aad")
export default class AadController {
  @operation({
    summary: "Get Aad",
  })
  @get()
  static getAad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aad",
  })
  @post("{id}")
  static createAad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
