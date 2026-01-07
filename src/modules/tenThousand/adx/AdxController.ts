import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adx")
export default class AdxController {
  @operation({
    summary: "Get Adx",
  })
  @get()
  static getAdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adx",
  })
  @post("{id}")
  static createAdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
