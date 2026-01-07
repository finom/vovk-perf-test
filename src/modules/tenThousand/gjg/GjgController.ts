import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjg")
export default class GjgController {
  @operation({
    summary: "Get Gjg",
  })
  @get()
  static getGjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjg",
  })
  @post("{id}")
  static createGjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
