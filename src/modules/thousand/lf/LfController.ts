import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lf")
export default class LfController {
  @operation({
    summary: "Get Lf",
  })
  @get()
  static getLf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lf",
  })
  @post("{id}")
  static createLf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
