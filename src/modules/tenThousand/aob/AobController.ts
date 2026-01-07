import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aob")
export default class AobController {
  @operation({
    summary: "Get Aob",
  })
  @get()
  static getAob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aob",
  })
  @post("{id}")
  static createAob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
