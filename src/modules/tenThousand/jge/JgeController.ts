import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jge")
export default class JgeController {
  @operation({
    summary: "Get Jge",
  })
  @get()
  static getJge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jge",
  })
  @post("{id}")
  static createJge = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
