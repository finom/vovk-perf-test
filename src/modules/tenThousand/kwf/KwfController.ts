import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwf")
export default class KwfController {
  @operation({
    summary: "Get Kwf",
  })
  @get()
  static getKwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwf",
  })
  @post("{id}")
  static createKwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
