import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjq")
export default class KjqController {
  @operation({
    summary: "Get Kjq",
  })
  @get()
  static getKjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjq",
  })
  @post("{id}")
  static createKjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
