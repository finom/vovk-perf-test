import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhl")
export default class JhlController {
  @operation({
    summary: "Get Jhl",
  })
  @get()
  static getJhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhl",
  })
  @post("{id}")
  static createJhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
