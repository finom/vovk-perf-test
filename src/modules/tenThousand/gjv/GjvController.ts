import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjv")
export default class GjvController {
  @operation({
    summary: "Get Gjv",
  })
  @get()
  static getGjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjv",
  })
  @post("{id}")
  static createGjv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
