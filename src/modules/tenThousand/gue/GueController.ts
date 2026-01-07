import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gue")
export default class GueController {
  @operation({
    summary: "Get Gue",
  })
  @get()
  static getGue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gue",
  })
  @post("{id}")
  static createGue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
