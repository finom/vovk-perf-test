import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayf")
export default class AyfController {
  @operation({
    summary: "Get Ayf",
  })
  @get()
  static getAyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayf",
  })
  @post("{id}")
  static createAyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
