import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnj")
export default class GnjController {
  @operation({
    summary: "Get Gnj",
  })
  @get()
  static getGnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnj",
  })
  @post("{id}")
  static createGnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
