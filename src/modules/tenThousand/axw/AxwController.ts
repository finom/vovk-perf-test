import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axw")
export default class AxwController {
  @operation({
    summary: "Get Axw",
  })
  @get()
  static getAxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axw",
  })
  @post("{id}")
  static createAxw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
