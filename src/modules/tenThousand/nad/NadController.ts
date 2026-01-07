import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nad")
export default class NadController {
  @operation({
    summary: "Get Nad",
  })
  @get()
  static getNad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nad",
  })
  @post("{id}")
  static createNad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
