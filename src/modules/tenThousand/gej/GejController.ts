import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gej")
export default class GejController {
  @operation({
    summary: "Get Gej",
  })
  @get()
  static getGej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gej",
  })
  @post("{id}")
  static createGej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
