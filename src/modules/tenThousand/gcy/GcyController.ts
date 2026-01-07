import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcy")
export default class GcyController {
  @operation({
    summary: "Get Gcy",
  })
  @get()
  static getGcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcy",
  })
  @post("{id}")
  static createGcy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
