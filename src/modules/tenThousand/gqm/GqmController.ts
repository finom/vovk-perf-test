import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqm")
export default class GqmController {
  @operation({
    summary: "Get Gqm",
  })
  @get()
  static getGqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqm",
  })
  @post("{id}")
  static createGqm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
