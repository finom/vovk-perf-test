import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kza")
export default class KzaController {
  @operation({
    summary: "Get Kza",
  })
  @get()
  static getKza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kza",
  })
  @post("{id}")
  static createKza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
