import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ale")
export default class AleController {
  @operation({
    summary: "Get Ale",
  })
  @get()
  static getAle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ale",
  })
  @post("{id}")
  static createAle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
