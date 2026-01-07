import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gr")
export default class GrController {
  @operation({
    summary: "Get Gr",
  })
  @get()
  static getGr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gr",
  })
  @post("{id}")
  static createGr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
