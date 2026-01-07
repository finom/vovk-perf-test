import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nii")
export default class NiiController {
  @operation({
    summary: "Get Nii",
  })
  @get()
  static getNii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nii",
  })
  @post("{id}")
  static createNii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
