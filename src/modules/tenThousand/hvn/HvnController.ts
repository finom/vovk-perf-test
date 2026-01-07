import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvn")
export default class HvnController {
  @operation({
    summary: "Get Hvn",
  })
  @get()
  static getHvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvn",
  })
  @post("{id}")
  static createHvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
