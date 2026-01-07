import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwn")
export default class JwnController {
  @operation({
    summary: "Get Jwn",
  })
  @get()
  static getJwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwn",
  })
  @post("{id}")
  static createJwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
