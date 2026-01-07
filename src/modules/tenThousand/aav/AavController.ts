import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aav")
export default class AavController {
  @operation({
    summary: "Get Aav",
  })
  @get()
  static getAav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aav",
  })
  @post("{id}")
  static createAav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
