import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjl")
export default class GjlController {
  @operation({
    summary: "Get Gjl",
  })
  @get()
  static getGjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjl",
  })
  @post("{id}")
  static createGjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
