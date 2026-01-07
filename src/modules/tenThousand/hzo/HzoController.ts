import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hzo")
export default class HzoController {
  @operation({
    summary: "Get Hzo",
  })
  @get()
  static getHzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hzo",
  })
  @post("{id}")
  static createHzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
