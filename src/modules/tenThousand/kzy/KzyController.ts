import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzy")
export default class KzyController {
  @operation({
    summary: "Get Kzy",
  })
  @get()
  static getKzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzy",
  })
  @post("{id}")
  static createKzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
