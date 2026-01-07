import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayb")
export default class AybController {
  @operation({
    summary: "Get Ayb",
  })
  @get()
  static getAyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayb",
  })
  @post("{id}")
  static createAyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
