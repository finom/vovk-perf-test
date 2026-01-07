import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gir")
export default class GirController {
  @operation({
    summary: "Get Gir",
  })
  @get()
  static getGir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gir",
  })
  @post("{id}")
  static createGir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
