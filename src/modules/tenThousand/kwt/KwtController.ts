import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwt")
export default class KwtController {
  @operation({
    summary: "Get Kwt",
  })
  @get()
  static getKwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwt",
  })
  @post("{id}")
  static createKwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
