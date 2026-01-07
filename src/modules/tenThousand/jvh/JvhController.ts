import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvh")
export default class JvhController {
  @operation({
    summary: "Get Jvh",
  })
  @get()
  static getJvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvh",
  })
  @post("{id}")
  static createJvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
