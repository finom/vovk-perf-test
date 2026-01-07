import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asq")
export default class AsqController {
  @operation({
    summary: "Get Asq",
  })
  @get()
  static getAsq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asq",
  })
  @post("{id}")
  static createAsq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
