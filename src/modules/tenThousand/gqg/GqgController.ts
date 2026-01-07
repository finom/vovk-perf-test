import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqg")
export default class GqgController {
  @operation({
    summary: "Get Gqg",
  })
  @get()
  static getGqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqg",
  })
  @post("{id}")
  static createGqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
