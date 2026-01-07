import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guu")
export default class GuuController {
  @operation({
    summary: "Get Guu",
  })
  @get()
  static getGuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guu",
  })
  @post("{id}")
  static createGuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
