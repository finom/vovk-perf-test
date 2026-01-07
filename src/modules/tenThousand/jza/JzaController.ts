import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jza")
export default class JzaController {
  @operation({
    summary: "Get Jza",
  })
  @get()
  static getJza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jza",
  })
  @post("{id}")
  static createJza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
