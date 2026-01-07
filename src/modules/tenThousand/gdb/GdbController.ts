import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdb")
export default class GdbController {
  @operation({
    summary: "Get Gdb",
  })
  @get()
  static getGdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdb",
  })
  @post("{id}")
  static createGdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
