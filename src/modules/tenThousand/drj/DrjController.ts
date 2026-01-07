import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drj")
export default class DrjController {
  @operation({
    summary: "Get Drj",
  })
  @get()
  static getDrj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drj",
  })
  @post("{id}")
  static createDrj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
