import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpd")
export default class JpdController {
  @operation({
    summary: "Get Jpd",
  })
  @get()
  static getJpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jpd",
  })
  @post("{id}")
  static createJpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
