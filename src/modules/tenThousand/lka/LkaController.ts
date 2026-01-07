import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lka")
export default class LkaController {
  @operation({
    summary: "Get Lka",
  })
  @get()
  static getLka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lka",
  })
  @post("{id}")
  static createLka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
