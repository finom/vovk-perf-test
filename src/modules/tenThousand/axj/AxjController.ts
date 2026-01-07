import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axj")
export default class AxjController {
  @operation({
    summary: "Get Axj",
  })
  @get()
  static getAxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axj",
  })
  @post("{id}")
  static createAxj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
