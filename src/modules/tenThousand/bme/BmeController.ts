import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bme")
export default class BmeController {
  @operation({
    summary: "Get Bme",
  })
  @get()
  static getBme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bme",
  })
  @post("{id}")
  static createBme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
