import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gza")
export default class GzaController {
  @operation({
    summary: "Get Gza",
  })
  @get()
  static getGza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gza",
  })
  @post("{id}")
  static createGza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
