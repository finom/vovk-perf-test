import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldn")
export default class LdnController {
  @operation({
    summary: "Get Ldn",
  })
  @get()
  static getLdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldn",
  })
  @post("{id}")
  static createLdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
