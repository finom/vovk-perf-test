import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyx")
export default class DyxController {
  @operation({
    summary: "Get Dyx",
  })
  @get()
  static getDyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyx",
  })
  @post("{id}")
  static createDyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
