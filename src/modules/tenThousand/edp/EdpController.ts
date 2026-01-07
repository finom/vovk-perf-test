import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edp")
export default class EdpController {
  @operation({
    summary: "Get Edp",
  })
  @get()
  static getEdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edp",
  })
  @post("{id}")
  static createEdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
