import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwa")
export default class GwaController {
  @operation({
    summary: "Get Gwa",
  })
  @get()
  static getGwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwa",
  })
  @post("{id}")
  static createGwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
