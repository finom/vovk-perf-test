import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drn")
export default class DrnController {
  @operation({
    summary: "Get Drn",
  })
  @get()
  static getDrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drn",
  })
  @post("{id}")
  static createDrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
