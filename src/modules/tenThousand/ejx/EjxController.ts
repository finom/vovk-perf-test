import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejx")
export default class EjxController {
  @operation({
    summary: "Get Ejx",
  })
  @get()
  static getEjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejx",
  })
  @post("{id}")
  static createEjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
