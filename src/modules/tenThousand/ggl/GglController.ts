import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggl")
export default class GglController {
  @operation({
    summary: "Get Ggl",
  })
  @get()
  static getGgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggl",
  })
  @post("{id}")
  static createGgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
