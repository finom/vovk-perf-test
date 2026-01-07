import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdj")
export default class GdjController {
  @operation({
    summary: "Get Gdj",
  })
  @get()
  static getGdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdj",
  })
  @post("{id}")
  static createGdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
