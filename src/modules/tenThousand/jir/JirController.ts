import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jir")
export default class JirController {
  @operation({
    summary: "Get Jir",
  })
  @get()
  static getJir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jir",
  })
  @post("{id}")
  static createJir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
