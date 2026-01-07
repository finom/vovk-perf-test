import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nib")
export default class NibController {
  @operation({
    summary: "Get Nib",
  })
  @get()
  static getNib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nib",
  })
  @post("{id}")
  static createNib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
