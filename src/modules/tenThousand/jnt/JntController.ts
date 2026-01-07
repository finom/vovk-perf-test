import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnt")
export default class JntController {
  @operation({
    summary: "Get Jnt",
  })
  @get()
  static getJnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnt",
  })
  @post("{id}")
  static createJnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
