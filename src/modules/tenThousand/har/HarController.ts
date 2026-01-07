import { procedure, prefix, get, post, operation } from "vovk";

@prefix("har")
export default class HarController {
  @operation({
    summary: "Get Har",
  })
  @get()
  static getHar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Har",
  })
  @post("{id}")
  static createHar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
