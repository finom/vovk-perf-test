import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jne")
export default class JneController {
  @operation({
    summary: "Get Jne",
  })
  @get()
  static getJne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jne",
  })
  @post("{id}")
  static createJne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
