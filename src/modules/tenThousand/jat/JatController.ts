import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jat")
export default class JatController {
  @operation({
    summary: "Get Jat",
  })
  @get()
  static getJat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jat",
  })
  @post("{id}")
  static createJat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
