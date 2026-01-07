import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyx")
export default class EyxController {
  @operation({
    summary: "Get Eyx",
  })
  @get()
  static getEyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyx",
  })
  @post("{id}")
  static createEyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
