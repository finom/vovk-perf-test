import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gss")
export default class GssController {
  @operation({
    summary: "Get Gss",
  })
  @get()
  static getGss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gss",
  })
  @post("{id}")
  static createGss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
