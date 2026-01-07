import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agl")
export default class AglController {
  @operation({
    summary: "Get Agl",
  })
  @get()
  static getAgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agl",
  })
  @post("{id}")
  static createAgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
