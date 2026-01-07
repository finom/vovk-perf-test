import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byx")
export default class ByxController {
  @operation({
    summary: "Get Byx",
  })
  @get()
  static getByx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byx",
  })
  @post("{id}")
  static createByx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
