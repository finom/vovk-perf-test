import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koe")
export default class KoeController {
  @operation({
    summary: "Get Koe",
  })
  @get()
  static getKoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koe",
  })
  @post("{id}")
  static createKoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
