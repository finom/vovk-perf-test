import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lza")
export default class LzaController {
  @operation({
    summary: "Get Lza",
  })
  @get()
  static getLza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lza",
  })
  @post("{id}")
  static createLza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
