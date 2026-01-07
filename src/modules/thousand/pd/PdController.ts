import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pd")
export default class PdController {
  @operation({
    summary: "Get Pd",
  })
  @get()
  static getPd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pd",
  })
  @post("{id}")
  static createPd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
