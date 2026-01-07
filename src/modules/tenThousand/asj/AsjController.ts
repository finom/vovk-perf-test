import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asj")
export default class AsjController {
  @operation({
    summary: "Get Asj",
  })
  @get()
  static getAsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asj",
  })
  @post("{id}")
  static createAsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
