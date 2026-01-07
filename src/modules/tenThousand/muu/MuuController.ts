import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muu")
export default class MuuController {
  @operation({
    summary: "Get Muu",
  })
  @get()
  static getMuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muu",
  })
  @post("{id}")
  static createMuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
