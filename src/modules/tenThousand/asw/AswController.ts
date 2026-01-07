import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asw")
export default class AswController {
  @operation({
    summary: "Get Asw",
  })
  @get()
  static getAsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asw",
  })
  @post("{id}")
  static createAsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
