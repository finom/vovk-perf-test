import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdu")
export default class JduController {
  @operation({
    summary: "Get Jdu",
  })
  @get()
  static getJdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdu",
  })
  @post("{id}")
  static createJdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
