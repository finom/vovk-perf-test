import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gof")
export default class GofController {
  @operation({
    summary: "Get Gof",
  })
  @get()
  static getGof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gof",
  })
  @post("{id}")
  static createGof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
