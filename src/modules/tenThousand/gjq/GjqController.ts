import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjq")
export default class GjqController {
  @operation({
    summary: "Get Gjq",
  })
  @get()
  static getGjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjq",
  })
  @post("{id}")
  static createGjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
