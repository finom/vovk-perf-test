import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrh")
export default class JrhController {
  @operation({
    summary: "Get Jrh",
  })
  @get()
  static getJrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrh",
  })
  @post("{id}")
  static createJrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
