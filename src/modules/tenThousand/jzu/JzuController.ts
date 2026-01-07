import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzu")
export default class JzuController {
  @operation({
    summary: "Get Jzu",
  })
  @get()
  static getJzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzu",
  })
  @post("{id}")
  static createJzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
