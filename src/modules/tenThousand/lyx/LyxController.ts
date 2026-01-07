import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyx")
export default class LyxController {
  @operation({
    summary: "Get Lyx",
  })
  @get()
  static getLyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyx",
  })
  @post("{id}")
  static createLyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
