import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gb")
export default class GbController {
  @operation({
    summary: "Get Gb",
  })
  @get()
  static getGb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gb",
  })
  @post("{id}")
  static createGb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
