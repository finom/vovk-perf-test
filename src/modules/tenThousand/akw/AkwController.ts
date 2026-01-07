import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akw")
export default class AkwController {
  @operation({
    summary: "Get Akw",
  })
  @get()
  static getAkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akw",
  })
  @post("{id}")
  static createAkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
