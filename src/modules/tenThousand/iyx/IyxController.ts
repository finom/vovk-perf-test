import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyx")
export default class IyxController {
  @operation({
    summary: "Get Iyx",
  })
  @get()
  static getIyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyx",
  })
  @post("{id}")
  static createIyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
