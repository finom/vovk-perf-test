import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mck")
export default class MckController {
  @operation({
    summary: "Get Mck",
  })
  @get()
  static getMck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mck",
  })
  @post("{id}")
  static createMck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
