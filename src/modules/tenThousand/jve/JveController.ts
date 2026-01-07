import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jve")
export default class JveController {
  @operation({
    summary: "Get Jve",
  })
  @get()
  static getJve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jve",
  })
  @post("{id}")
  static createJve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
