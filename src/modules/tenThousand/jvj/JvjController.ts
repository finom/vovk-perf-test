import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvj")
export default class JvjController {
  @operation({
    summary: "Get Jvj",
  })
  @get()
  static getJvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvj",
  })
  @post("{id}")
  static createJvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
