import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcd")
export default class GcdController {
  @operation({
    summary: "Get Gcd",
  })
  @get()
  static getGcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcd",
  })
  @post("{id}")
  static createGcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
