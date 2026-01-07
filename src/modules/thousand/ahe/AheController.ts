import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahe")
export default class AheController {
  @operation({
    summary: "Get Ahe",
  })
  @get()
  static getAhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahe",
  })
  @post("{id}")
  static createAhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
