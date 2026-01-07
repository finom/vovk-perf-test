import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goz")
export default class GozController {
  @operation({
    summary: "Get Goz",
  })
  @get()
  static getGoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goz",
  })
  @post("{id}")
  static createGoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
