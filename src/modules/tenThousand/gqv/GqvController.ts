import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqv")
export default class GqvController {
  @operation({
    summary: "Get Gqv",
  })
  @get()
  static getGqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqv",
  })
  @post("{id}")
  static createGqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
