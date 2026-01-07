import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msb")
export default class MsbController {
  @operation({
    summary: "Get Msb",
  })
  @get()
  static getMsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msb",
  })
  @post("{id}")
  static createMsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
