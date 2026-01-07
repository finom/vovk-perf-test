import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddy")
export default class DdyController {
  @operation({
    summary: "Get Ddy",
  })
  @get()
  static getDdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddy",
  })
  @post("{id}")
  static createDdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
