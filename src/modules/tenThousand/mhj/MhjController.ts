import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhj")
export default class MhjController {
  @operation({
    summary: "Get Mhj",
  })
  @get()
  static getMhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhj",
  })
  @post("{id}")
  static createMhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
