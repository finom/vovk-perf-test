import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjh")
export default class KjhController {
  @operation({
    summary: "Get Kjh",
  })
  @get()
  static getKjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjh",
  })
  @post("{id}")
  static createKjh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
