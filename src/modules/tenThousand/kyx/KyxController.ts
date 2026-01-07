import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyx")
export default class KyxController {
  @operation({
    summary: "Get Kyx",
  })
  @get()
  static getKyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyx",
  })
  @post("{id}")
  static createKyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
