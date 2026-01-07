import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fia")
export default class FiaController {
  @operation({
    summary: "Get Fia",
  })
  @get()
  static getFia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fia",
  })
  @post("{id}")
  static createFia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
