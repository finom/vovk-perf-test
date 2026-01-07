import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjw")
export default class KjwController {
  @operation({
    summary: "Get Kjw",
  })
  @get()
  static getKjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjw",
  })
  @post("{id}")
  static createKjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
