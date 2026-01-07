import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akc")
export default class AkcController {
  @operation({
    summary: "Get Akc",
  })
  @get()
  static getAkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akc",
  })
  @post("{id}")
  static createAkc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
