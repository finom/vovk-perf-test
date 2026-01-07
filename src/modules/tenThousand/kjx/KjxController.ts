import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjx")
export default class KjxController {
  @operation({
    summary: "Get Kjx",
  })
  @get()
  static getKjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjx",
  })
  @post("{id}")
  static createKjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
