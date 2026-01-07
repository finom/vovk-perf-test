import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afy")
export default class AfyController {
  @operation({
    summary: "Get Afy",
  })
  @get()
  static getAfy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afy",
  })
  @post("{id}")
  static createAfy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
