import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hza")
export default class HzaController {
  @operation({
    summary: "Get Hza",
  })
  @get()
  static getHza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hza",
  })
  @post("{id}")
  static createHza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
