import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kph")
export default class KphController {
  @operation({
    summary: "Get Kph",
  })
  @get()
  static getKph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kph",
  })
  @post("{id}")
  static createKph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
