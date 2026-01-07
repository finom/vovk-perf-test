import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhu")
export default class HhuController {
  @operation({
    summary: "Get Hhu",
  })
  @get()
  static getHhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhu",
  })
  @post("{id}")
  static createHhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
