import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aou")
export default class AouController {
  @operation({
    summary: "Get Aou",
  })
  @get()
  static getAou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aou",
  })
  @post("{id}")
  static createAou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
