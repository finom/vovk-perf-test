import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bo")
export default class BoController {
  @operation({
    summary: "Get Bo",
  })
  @get()
  static getBo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bo",
  })
  @post("{id}")
  static createBo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
