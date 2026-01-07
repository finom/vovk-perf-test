import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akp")
export default class AkpController {
  @operation({
    summary: "Get Akp",
  })
  @get()
  static getAkp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akp",
  })
  @post("{id}")
  static createAkp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
