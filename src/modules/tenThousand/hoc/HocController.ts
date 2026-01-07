import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoc")
export default class HocController {
  @operation({
    summary: "Get Hoc",
  })
  @get()
  static getHoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoc",
  })
  @post("{id}")
  static createHoc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
