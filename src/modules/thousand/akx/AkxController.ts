import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akx")
export default class AkxController {
  @operation({
    summary: "Get Akx",
  })
  @get()
  static getAkx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akx",
  })
  @post("{id}")
  static createAkx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
