import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grj")
export default class GrjController {
  @operation({
    summary: "Get Grj",
  })
  @get()
  static getGrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grj",
  })
  @post("{id}")
  static createGrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
