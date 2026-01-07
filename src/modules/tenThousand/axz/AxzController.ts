import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axz")
export default class AxzController {
  @operation({
    summary: "Get Axz",
  })
  @get()
  static getAxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axz",
  })
  @post("{id}")
  static createAxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
