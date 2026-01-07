import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fru")
export default class FruController {
  @operation({
    summary: "Get Fru",
  })
  @get()
  static getFru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fru",
  })
  @post("{id}")
  static createFru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
