import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwb")
export default class JwbController {
  @operation({
    summary: "Get Jwb",
  })
  @get()
  static getJwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwb",
  })
  @post("{id}")
  static createJwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
