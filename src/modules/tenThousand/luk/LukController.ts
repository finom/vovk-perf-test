import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luk")
export default class LukController {
  @operation({
    summary: "Get Luk",
  })
  @get()
  static getLuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luk",
  })
  @post("{id}")
  static createLuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
