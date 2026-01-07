import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsk")
export default class JskController {
  @operation({
    summary: "Get Jsk",
  })
  @get()
  static getJsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsk",
  })
  @post("{id}")
  static createJsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
