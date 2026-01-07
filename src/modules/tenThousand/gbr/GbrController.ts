import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbr")
export default class GbrController {
  @operation({
    summary: "Get Gbr",
  })
  @get()
  static getGbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbr",
  })
  @post("{id}")
  static createGbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
