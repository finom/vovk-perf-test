import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoy")
export default class HoyController {
  @operation({
    summary: "Get Hoy",
  })
  @get()
  static getHoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoy",
  })
  @post("{id}")
  static createHoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
