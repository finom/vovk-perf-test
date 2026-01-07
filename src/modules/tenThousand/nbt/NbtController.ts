import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbt")
export default class NbtController {
  @operation({
    summary: "Get Nbt",
  })
  @get()
  static getNbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nbt",
  })
  @post("{id}")
  static createNbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
