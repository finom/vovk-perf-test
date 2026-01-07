import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahj")
export default class AhjController {
  @operation({
    summary: "Get Ahj",
  })
  @get()
  static getAhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahj",
  })
  @post("{id}")
  static createAhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
