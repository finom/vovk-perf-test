import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jii")
export default class JiiController {
  @operation({
    summary: "Get Jii",
  })
  @get()
  static getJii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jii",
  })
  @post("{id}")
  static createJii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
