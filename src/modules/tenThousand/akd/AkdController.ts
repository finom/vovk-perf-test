import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akd")
export default class AkdController {
  @operation({
    summary: "Get Akd",
  })
  @get()
  static getAkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akd",
  })
  @post("{id}")
  static createAkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
