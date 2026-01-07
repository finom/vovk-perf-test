import { procedure, prefix, get, post, operation } from "vovk";

@prefix("o")
export default class OController {
  @operation({
    summary: "Get O",
  })
  @get()
  static getO = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create O",
  })
  @post("{id}")
  static createO = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
