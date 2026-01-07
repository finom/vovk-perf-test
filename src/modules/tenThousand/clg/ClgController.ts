import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clg")
export default class ClgController {
  @operation({
    summary: "Get Clg",
  })
  @get()
  static getClg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clg",
  })
  @post("{id}")
  static createClg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
