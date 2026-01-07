import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axd")
export default class AxdController {
  @operation({
    summary: "Get Axd",
  })
  @get()
  static getAxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axd",
  })
  @post("{id}")
  static createAxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
