import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqj")
export default class GqjController {
  @operation({
    summary: "Get Gqj",
  })
  @get()
  static getGqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqj",
  })
  @post("{id}")
  static createGqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
