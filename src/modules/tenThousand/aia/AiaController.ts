import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aia")
export default class AiaController {
  @operation({
    summary: "Get Aia",
  })
  @get()
  static getAia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aia",
  })
  @post("{id}")
  static createAia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
