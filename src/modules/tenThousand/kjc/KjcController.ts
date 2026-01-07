import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjc")
export default class KjcController {
  @operation({
    summary: "Get Kjc",
  })
  @get()
  static getKjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjc",
  })
  @post("{id}")
  static createKjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
