import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joq")
export default class JoqController {
  @operation({
    summary: "Get Joq",
  })
  @get()
  static getJoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joq",
  })
  @post("{id}")
  static createJoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
