import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jos")
export default class JosController {
  @operation({
    summary: "Get Jos",
  })
  @get()
  static getJos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jos",
  })
  @post("{id}")
  static createJos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
