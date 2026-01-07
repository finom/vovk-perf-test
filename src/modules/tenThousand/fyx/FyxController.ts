import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyx")
export default class FyxController {
  @operation({
    summary: "Get Fyx",
  })
  @get()
  static getFyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fyx",
  })
  @post("{id}")
  static createFyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
