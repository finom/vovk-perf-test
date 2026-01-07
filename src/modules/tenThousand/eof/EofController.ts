import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eof")
export default class EofController {
  @operation({
    summary: "Get Eof",
  })
  @get()
  static getEof = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eof",
  })
  @post("{id}")
  static createEof = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
