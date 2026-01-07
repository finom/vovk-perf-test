import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayx")
export default class AyxController {
  @operation({
    summary: "Get Ayx",
  })
  @get()
  static getAyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayx",
  })
  @post("{id}")
  static createAyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
