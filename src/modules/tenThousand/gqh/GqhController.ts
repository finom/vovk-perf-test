import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqh")
export default class GqhController {
  @operation({
    summary: "Get Gqh",
  })
  @get()
  static getGqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqh",
  })
  @post("{id}")
  static createGqh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
