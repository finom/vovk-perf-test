import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axl")
export default class AxlController {
  @operation({
    summary: "Get Axl",
  })
  @get()
  static getAxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axl",
  })
  @post("{id}")
  static createAxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
