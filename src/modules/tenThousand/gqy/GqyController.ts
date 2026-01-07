import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqy")
export default class GqyController {
  @operation({
    summary: "Get Gqy",
  })
  @get()
  static getGqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqy",
  })
  @post("{id}")
  static createGqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
