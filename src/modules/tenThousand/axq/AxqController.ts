import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axq")
export default class AxqController {
  @operation({
    summary: "Get Axq",
  })
  @get()
  static getAxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axq",
  })
  @post("{id}")
  static createAxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
