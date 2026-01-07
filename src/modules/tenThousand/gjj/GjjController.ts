import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjj")
export default class GjjController {
  @operation({
    summary: "Get Gjj",
  })
  @get()
  static getGjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjj",
  })
  @post("{id}")
  static createGjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
