import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhu")
export default class DhuController {
  @operation({
    summary: "Get Dhu",
  })
  @get()
  static getDhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhu",
  })
  @post("{id}")
  static createDhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
