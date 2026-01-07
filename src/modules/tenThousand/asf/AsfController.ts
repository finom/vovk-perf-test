import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asf")
export default class AsfController {
  @operation({
    summary: "Get Asf",
  })
  @get()
  static getAsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asf",
  })
  @post("{id}")
  static createAsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
