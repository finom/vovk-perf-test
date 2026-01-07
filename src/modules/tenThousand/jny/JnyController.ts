import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jny")
export default class JnyController {
  @operation({
    summary: "Get Jny",
  })
  @get()
  static getJny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jny",
  })
  @post("{id}")
  static createJny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
