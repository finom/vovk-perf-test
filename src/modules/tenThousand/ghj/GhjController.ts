import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghj")
export default class GhjController {
  @operation({
    summary: "Get Ghj",
  })
  @get()
  static getGhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ghj",
  })
  @post("{id}")
  static createGhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
