import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayq")
export default class AyqController {
  @operation({
    summary: "Get Ayq",
  })
  @get()
  static getAyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayq",
  })
  @post("{id}")
  static createAyq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
