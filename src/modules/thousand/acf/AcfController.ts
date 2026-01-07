import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acf")
export default class AcfController {
  @operation({
    summary: "Get Acf",
  })
  @get()
  static getAcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acf",
  })
  @post("{id}")
  static createAcf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
