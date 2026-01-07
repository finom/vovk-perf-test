import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhr")
export default class HhrController {
  @operation({
    summary: "Get Hhr",
  })
  @get()
  static getHhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhr",
  })
  @post("{id}")
  static createHhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
