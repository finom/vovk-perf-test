import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkh")
export default class MkhController {
  @operation({
    summary: "Get Mkh",
  })
  @get()
  static getMkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mkh",
  })
  @post("{id}")
  static createMkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
