import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jer")
export default class JerController {
  @operation({
    summary: "Get Jer",
  })
  @get()
  static getJer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jer",
  })
  @post("{id}")
  static createJer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
