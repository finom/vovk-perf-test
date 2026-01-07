import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfa")
export default class HfaController {
  @operation({
    summary: "Get Hfa",
  })
  @get()
  static getHfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfa",
  })
  @post("{id}")
  static createHfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
