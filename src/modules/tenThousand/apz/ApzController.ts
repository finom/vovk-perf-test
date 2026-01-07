import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apz")
export default class ApzController {
  @operation({
    summary: "Get Apz",
  })
  @get()
  static getApz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apz",
  })
  @post("{id}")
  static createApz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
