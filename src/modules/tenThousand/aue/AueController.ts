import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aue")
export default class AueController {
  @operation({
    summary: "Get Aue",
  })
  @get()
  static getAue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aue",
  })
  @post("{id}")
  static createAue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
