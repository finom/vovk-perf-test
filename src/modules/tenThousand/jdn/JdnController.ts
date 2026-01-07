import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdn")
export default class JdnController {
  @operation({
    summary: "Get Jdn",
  })
  @get()
  static getJdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdn",
  })
  @post("{id}")
  static createJdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
