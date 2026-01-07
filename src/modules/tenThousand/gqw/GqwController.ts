import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqw")
export default class GqwController {
  @operation({
    summary: "Get Gqw",
  })
  @get()
  static getGqw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqw",
  })
  @post("{id}")
  static createGqw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
