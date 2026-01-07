import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcc")
export default class JccController {
  @operation({
    summary: "Get Jcc",
  })
  @get()
  static getJcc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcc",
  })
  @post("{id}")
  static createJcc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
