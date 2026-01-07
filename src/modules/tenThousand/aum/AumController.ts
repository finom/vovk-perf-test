import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aum")
export default class AumController {
  @operation({
    summary: "Get Aum",
  })
  @get()
  static getAum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aum",
  })
  @post("{id}")
  static createAum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
