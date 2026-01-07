import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drz")
export default class DrzController {
  @operation({
    summary: "Get Drz",
  })
  @get()
  static getDrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drz",
  })
  @post("{id}")
  static createDrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
