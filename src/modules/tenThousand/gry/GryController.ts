import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gry")
export default class GryController {
  @operation({
    summary: "Get Gry",
  })
  @get()
  static getGry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gry",
  })
  @post("{id}")
  static createGry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
