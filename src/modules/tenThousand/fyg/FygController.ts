import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyg")
export default class FygController {
  @operation({
    summary: "Get Fyg",
  })
  @get()
  static getFyg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyg",
  })
  @post("{id}")
  static createFyg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
