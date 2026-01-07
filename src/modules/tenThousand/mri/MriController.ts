import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mri")
export default class MriController {
  @operation({
    summary: "Get Mri",
  })
  @get()
  static getMri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mri",
  })
  @post("{id}")
  static createMri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
