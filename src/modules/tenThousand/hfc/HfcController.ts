import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfc")
export default class HfcController {
  @operation({
    summary: "Get Hfc",
  })
  @get()
  static getHfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfc",
  })
  @post("{id}")
  static createHfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
