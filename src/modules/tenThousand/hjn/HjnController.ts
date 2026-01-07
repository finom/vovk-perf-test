import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjn")
export default class HjnController {
  @operation({
    summary: "Get Hjn",
  })
  @get()
  static getHjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjn",
  })
  @post("{id}")
  static createHjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
