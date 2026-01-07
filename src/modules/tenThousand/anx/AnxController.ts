import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anx")
export default class AnxController {
  @operation({
    summary: "Get Anx",
  })
  @get()
  static getAnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anx",
  })
  @post("{id}")
  static createAnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
