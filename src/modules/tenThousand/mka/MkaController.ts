import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mka")
export default class MkaController {
  @operation({
    summary: "Get Mka",
  })
  @get()
  static getMka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mka",
  })
  @post("{id}")
  static createMka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
