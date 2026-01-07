import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axn")
export default class AxnController {
  @operation({
    summary: "Get Axn",
  })
  @get()
  static getAxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axn",
  })
  @post("{id}")
  static createAxn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
