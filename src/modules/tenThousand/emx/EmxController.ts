import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emx")
export default class EmxController {
  @operation({
    summary: "Get Emx",
  })
  @get()
  static getEmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emx",
  })
  @post("{id}")
  static createEmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
