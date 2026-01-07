import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cva")
export default class CvaController {
  @operation({
    summary: "Get Cva",
  })
  @get()
  static getCva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cva",
  })
  @post("{id}")
  static createCva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
