import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvi")
export default class GviController {
  @operation({
    summary: "Get Gvi",
  })
  @get()
  static getGvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvi",
  })
  @post("{id}")
  static createGvi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
