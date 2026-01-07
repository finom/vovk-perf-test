import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azu")
export default class AzuController {
  @operation({
    summary: "Get Azu",
  })
  @get()
  static getAzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azu",
  })
  @post("{id}")
  static createAzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
