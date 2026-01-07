import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flb")
export default class FlbController {
  @operation({
    summary: "Get Flb",
  })
  @get()
  static getFlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flb",
  })
  @post("{id}")
  static createFlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
