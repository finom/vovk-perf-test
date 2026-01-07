import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heq")
export default class HeqController {
  @operation({
    summary: "Get Heq",
  })
  @get()
  static getHeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Heq",
  })
  @post("{id}")
  static createHeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
