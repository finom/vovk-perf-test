import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czn")
export default class CznController {
  @operation({
    summary: "Get Czn",
  })
  @get()
  static getCzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czn",
  })
  @post("{id}")
  static createCzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
