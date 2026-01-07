import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrn")
export default class JrnController {
  @operation({
    summary: "Get Jrn",
  })
  @get()
  static getJrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrn",
  })
  @post("{id}")
  static createJrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
