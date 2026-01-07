import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aoq")
export default class AoqController {
  @operation({
    summary: "Get Aoq",
  })
  @get()
  static getAoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoq",
  })
  @post("{id}")
  static createAoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
