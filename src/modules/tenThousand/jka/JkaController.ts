import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jka")
export default class JkaController {
  @operation({
    summary: "Get Jka",
  })
  @get()
  static getJka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jka",
  })
  @post("{id}")
  static createJka = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
