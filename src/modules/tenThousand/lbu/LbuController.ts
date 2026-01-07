import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbu")
export default class LbuController {
  @operation({
    summary: "Get Lbu",
  })
  @get()
  static getLbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbu",
  })
  @post("{id}")
  static createLbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
