import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gad")
export default class GadController {
  @operation({
    summary: "Get Gad",
  })
  @get()
  static getGad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gad",
  })
  @post("{id}")
  static createGad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
