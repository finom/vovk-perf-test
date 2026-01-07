import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvc")
export default class CvcController {
  @operation({
    summary: "Get Cvc",
  })
  @get()
  static getCvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvc",
  })
  @post("{id}")
  static createCvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
