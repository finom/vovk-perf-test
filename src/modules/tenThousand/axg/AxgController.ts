import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axg")
export default class AxgController {
  @operation({
    summary: "Get Axg",
  })
  @get()
  static getAxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axg",
  })
  @post("{id}")
  static createAxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
