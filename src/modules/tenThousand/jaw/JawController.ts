import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jaw")
export default class JawController {
  @operation({
    summary: "Get Jaw",
  })
  @get()
  static getJaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jaw",
  })
  @post("{id}")
  static createJaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
