import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jok")
export default class JokController {
  @operation({
    summary: "Get Jok",
  })
  @get()
  static getJok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jok",
  })
  @post("{id}")
  static createJok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
