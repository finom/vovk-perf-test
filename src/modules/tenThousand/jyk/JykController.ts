import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyk")
export default class JykController {
  @operation({
    summary: "Get Jyk",
  })
  @get()
  static getJyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyk",
  })
  @post("{id}")
  static createJyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
