import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exs")
export default class ExsController {
  @operation({
    summary: "Get Exs",
  })
  @get()
  static getExs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exs",
  })
  @post("{id}")
  static createExs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
