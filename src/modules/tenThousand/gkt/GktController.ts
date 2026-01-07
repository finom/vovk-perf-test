import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkt")
export default class GktController {
  @operation({
    summary: "Get Gkt",
  })
  @get()
  static getGkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gkt",
  })
  @post("{id}")
  static createGkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
