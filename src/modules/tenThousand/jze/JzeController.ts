import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jze")
export default class JzeController {
  @operation({
    summary: "Get Jze",
  })
  @get()
  static getJze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jze",
  })
  @post("{id}")
  static createJze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
