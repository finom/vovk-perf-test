import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpz")
export default class MpzController {
  @operation({
    summary: "Get Mpz",
  })
  @get()
  static getMpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpz",
  })
  @post("{id}")
  static createMpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
