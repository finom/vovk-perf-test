import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rm")
export default class RmController {
  @operation({
    summary: "Get Rm",
  })
  @get()
  static getRm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Rm",
  })
  @post("{id}")
  static createRm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
