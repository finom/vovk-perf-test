import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gna")
export default class GnaController {
  @operation({
    summary: "Get Gna",
  })
  @get()
  static getGna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gna",
  })
  @post("{id}")
  static createGna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
