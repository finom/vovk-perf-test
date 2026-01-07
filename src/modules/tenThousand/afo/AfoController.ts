import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afo")
export default class AfoController {
  @operation({
    summary: "Get Afo",
  })
  @get()
  static getAfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afo",
  })
  @post("{id}")
  static createAfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
