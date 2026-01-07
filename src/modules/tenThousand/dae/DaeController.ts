import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dae")
export default class DaeController {
  @operation({
    summary: "Get Dae",
  })
  @get()
  static getDae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dae",
  })
  @post("{id}")
  static createDae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
