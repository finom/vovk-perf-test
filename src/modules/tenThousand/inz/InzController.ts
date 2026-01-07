import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inz")
export default class InzController {
  @operation({
    summary: "Get Inz",
  })
  @get()
  static getInz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inz",
  })
  @post("{id}")
  static createInz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
