import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buu")
export default class BuuController {
  @operation({
    summary: "Get Buu",
  })
  @get()
  static getBuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buu",
  })
  @post("{id}")
  static createBuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
