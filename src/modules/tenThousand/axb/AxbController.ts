import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axb")
export default class AxbController {
  @operation({
    summary: "Get Axb",
  })
  @get()
  static getAxb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axb",
  })
  @post("{id}")
  static createAxb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
