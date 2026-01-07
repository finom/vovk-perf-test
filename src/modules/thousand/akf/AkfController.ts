import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akf")
export default class AkfController {
  @operation({
    summary: "Get Akf",
  })
  @get()
  static getAkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akf",
  })
  @post("{id}")
  static createAkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
