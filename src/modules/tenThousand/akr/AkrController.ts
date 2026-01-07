import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akr")
export default class AkrController {
  @operation({
    summary: "Get Akr",
  })
  @get()
  static getAkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akr",
  })
  @post("{id}")
  static createAkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
