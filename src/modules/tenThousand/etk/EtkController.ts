import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etk")
export default class EtkController {
  @operation({
    summary: "Get Etk",
  })
  @get()
  static getEtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etk",
  })
  @post("{id}")
  static createEtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
