import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwt")
export default class JwtController {
  @operation({
    summary: "Get Jwt",
  })
  @get()
  static getJwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jwt",
  })
  @post("{id}")
  static createJwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
