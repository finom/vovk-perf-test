import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eg")
export default class EgController {
  @operation({
    summary: "Get Eg",
  })
  @get()
  static getEg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eg",
  })
  @post("{id}")
  static createEg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
