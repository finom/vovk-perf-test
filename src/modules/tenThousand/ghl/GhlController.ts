import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghl")
export default class GhlController {
  @operation({
    summary: "Get Ghl",
  })
  @get()
  static getGhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghl",
  })
  @post("{id}")
  static createGhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
