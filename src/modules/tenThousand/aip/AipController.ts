import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aip")
export default class AipController {
  @operation({
    summary: "Get Aip",
  })
  @get()
  static getAip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aip",
  })
  @post("{id}")
  static createAip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
