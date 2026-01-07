import { procedure, prefix, get, post, operation } from "vovk";

@prefix("om")
export default class OmController {
  @operation({
    summary: "Get Om",
  })
  @get()
  static getOm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Om",
  })
  @post("{id}")
  static createOm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
