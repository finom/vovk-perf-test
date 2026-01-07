import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axr")
export default class AxrController {
  @operation({
    summary: "Get Axr",
  })
  @get()
  static getAxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axr",
  })
  @post("{id}")
  static createAxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
