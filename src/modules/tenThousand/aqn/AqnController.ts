import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqn")
export default class AqnController {
  @operation({
    summary: "Get Aqn",
  })
  @get()
  static getAqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqn",
  })
  @post("{id}")
  static createAqn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
