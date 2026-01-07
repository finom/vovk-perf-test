import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjg")
export default class KjgController {
  @operation({
    summary: "Get Kjg",
  })
  @get()
  static getKjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjg",
  })
  @post("{id}")
  static createKjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
