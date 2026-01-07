import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amu")
export default class AmuController {
  @operation({
    summary: "Get Amu",
  })
  @get()
  static getAmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amu",
  })
  @post("{id}")
  static createAmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
