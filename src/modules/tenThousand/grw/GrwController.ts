import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grw")
export default class GrwController {
  @operation({
    summary: "Get Grw",
  })
  @get()
  static getGrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grw",
  })
  @post("{id}")
  static createGrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
