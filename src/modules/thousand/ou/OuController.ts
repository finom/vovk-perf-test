import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ou")
export default class OuController {
  @operation({
    summary: "Get Ou",
  })
  @get()
  static getOu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ou",
  })
  @post("{id}")
  static createOu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
