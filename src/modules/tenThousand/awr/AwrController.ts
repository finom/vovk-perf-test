import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awr")
export default class AwrController {
  @operation({
    summary: "Get Awr",
  })
  @get()
  static getAwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awr",
  })
  @post("{id}")
  static createAwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
