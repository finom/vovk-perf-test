import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enj")
export default class EnjController {
  @operation({
    summary: "Get Enj",
  })
  @get()
  static getEnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enj",
  })
  @post("{id}")
  static createEnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
