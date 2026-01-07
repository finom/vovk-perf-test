import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asb")
export default class AsbController {
  @operation({
    summary: "Get Asb",
  })
  @get()
  static getAsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asb",
  })
  @post("{id}")
  static createAsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
