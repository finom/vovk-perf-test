import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jec")
export default class JecController {
  @operation({
    summary: "Get Jec",
  })
  @get()
  static getJec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jec",
  })
  @post("{id}")
  static createJec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
