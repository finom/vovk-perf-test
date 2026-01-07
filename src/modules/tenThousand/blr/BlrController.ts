import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blr")
export default class BlrController {
  @operation({
    summary: "Get Blr",
  })
  @get()
  static getBlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blr",
  })
  @post("{id}")
  static createBlr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
