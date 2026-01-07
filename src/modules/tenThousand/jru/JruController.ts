import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jru")
export default class JruController {
  @operation({
    summary: "Get Jru",
  })
  @get()
  static getJru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jru",
  })
  @post("{id}")
  static createJru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
