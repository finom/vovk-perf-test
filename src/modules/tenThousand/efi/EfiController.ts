import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efi")
export default class EfiController {
  @operation({
    summary: "Get Efi",
  })
  @get()
  static getEfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efi",
  })
  @post("{id}")
  static createEfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
