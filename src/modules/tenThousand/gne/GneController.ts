import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gne")
export default class GneController {
  @operation({
    summary: "Get Gne",
  })
  @get()
  static getGne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gne",
  })
  @post("{id}")
  static createGne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
