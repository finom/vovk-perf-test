import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jr")
export default class JrController {
  @operation({
    summary: "Get Jr",
  })
  @get()
  static getJr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jr",
  })
  @post("{id}")
  static createJr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
