import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aal")
export default class AalController {
  @operation({
    summary: "Get Aal",
  })
  @get()
  static getAal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aal",
  })
  @post("{id}")
  static createAal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
