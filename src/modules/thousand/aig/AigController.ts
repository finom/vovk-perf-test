import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aig")
export default class AigController {
  @operation({
    summary: "Get Aig",
  })
  @get()
  static getAig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aig",
  })
  @post("{id}")
  static createAig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
