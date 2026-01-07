import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lul")
export default class LulController {
  @operation({
    summary: "Get Lul",
  })
  @get()
  static getLul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lul",
  })
  @post("{id}")
  static createLul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
