import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brj")
export default class BrjController {
  @operation({
    summary: "Get Brj",
  })
  @get()
  static getBrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brj",
  })
  @post("{id}")
  static createBrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
