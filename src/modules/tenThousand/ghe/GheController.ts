import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghe")
export default class GheController {
  @operation({
    summary: "Get Ghe",
  })
  @get()
  static getGhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghe",
  })
  @post("{id}")
  static createGhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
