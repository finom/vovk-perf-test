import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwi")
export default class JwiController {
  @operation({
    summary: "Get Jwi",
  })
  @get()
  static getJwi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwi",
  })
  @post("{id}")
  static createJwi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
