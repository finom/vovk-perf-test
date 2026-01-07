import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jro")
export default class JroController {
  @operation({
    summary: "Get Jro",
  })
  @get()
  static getJro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jro",
  })
  @post("{id}")
  static createJro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
