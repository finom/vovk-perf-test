import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gib")
export default class GibController {
  @operation({
    summary: "Get Gib",
  })
  @get()
  static getGib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gib",
  })
  @post("{id}")
  static createGib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
