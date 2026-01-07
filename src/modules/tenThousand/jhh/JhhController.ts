import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhh")
export default class JhhController {
  @operation({
    summary: "Get Jhh",
  })
  @get()
  static getJhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhh",
  })
  @post("{id}")
  static createJhh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
