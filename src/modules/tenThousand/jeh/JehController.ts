import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeh")
export default class JehController {
  @operation({
    summary: "Get Jeh",
  })
  @get()
  static getJeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jeh",
  })
  @post("{id}")
  static createJeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
