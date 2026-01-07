import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyx")
export default class HyxController {
  @operation({
    summary: "Get Hyx",
  })
  @get()
  static getHyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyx",
  })
  @post("{id}")
  static createHyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
