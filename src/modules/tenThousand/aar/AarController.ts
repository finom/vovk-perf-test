import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aar")
export default class AarController {
  @operation({
    summary: "Get Aar",
  })
  @get()
  static getAar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aar",
  })
  @post("{id}")
  static createAar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
