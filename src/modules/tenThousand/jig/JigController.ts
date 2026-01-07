import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jig")
export default class JigController {
  @operation({
    summary: "Get Jig",
  })
  @get()
  static getJig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jig",
  })
  @post("{id}")
  static createJig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
