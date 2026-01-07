import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jor")
export default class JorController {
  @operation({
    summary: "Get Jor",
  })
  @get()
  static getJor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jor",
  })
  @post("{id}")
  static createJor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
