import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lje")
export default class LjeController {
  @operation({
    summary: "Get Lje",
  })
  @get()
  static getLje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lje",
  })
  @post("{id}")
  static createLje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
