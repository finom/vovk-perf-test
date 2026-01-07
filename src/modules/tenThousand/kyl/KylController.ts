import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyl")
export default class KylController {
  @operation({
    summary: "Get Kyl",
  })
  @get()
  static getKyl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyl",
  })
  @post("{id}")
  static createKyl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
