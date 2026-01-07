import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aje")
export default class AjeController {
  @operation({
    summary: "Get Aje",
  })
  @get()
  static getAje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aje",
  })
  @post("{id}")
  static createAje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
