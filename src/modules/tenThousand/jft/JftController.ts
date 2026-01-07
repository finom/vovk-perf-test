import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jft")
export default class JftController {
  @operation({
    summary: "Get Jft",
  })
  @get()
  static getJft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jft",
  })
  @post("{id}")
  static createJft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
