import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aee")
export default class AeeController {
  @operation({
    summary: "Get Aee",
  })
  @get()
  static getAee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aee",
  })
  @post("{id}")
  static createAee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
