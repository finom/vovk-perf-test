import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idq")
export default class IdqController {
  @operation({
    summary: "Get Idq",
  })
  @get()
  static getIdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idq",
  })
  @post("{id}")
  static createIdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
