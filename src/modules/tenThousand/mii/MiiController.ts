import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mii")
export default class MiiController {
  @operation({
    summary: "Get Mii",
  })
  @get()
  static getMii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mii",
  })
  @post("{id}")
  static createMii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
