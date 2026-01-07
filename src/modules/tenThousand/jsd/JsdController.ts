import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsd")
export default class JsdController {
  @operation({
    summary: "Get Jsd",
  })
  @get()
  static getJsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsd",
  })
  @post("{id}")
  static createJsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
