import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anw")
export default class AnwController {
  @operation({
    summary: "Get Anw",
  })
  @get()
  static getAnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anw",
  })
  @post("{id}")
  static createAnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
