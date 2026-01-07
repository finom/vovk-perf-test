import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aak")
export default class AakController {
  @operation({
    summary: "Get Aak",
  })
  @get()
  static getAak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aak",
  })
  @post("{id}")
  static createAak = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
