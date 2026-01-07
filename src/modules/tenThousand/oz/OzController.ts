import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oz")
export default class OzController {
  @operation({
    summary: "Get Oz",
  })
  @get()
  static getOz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oz",
  })
  @post("{id}")
  static createOz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
