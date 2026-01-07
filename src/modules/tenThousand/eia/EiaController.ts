import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eia")
export default class EiaController {
  @operation({
    summary: "Get Eia",
  })
  @get()
  static getEia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eia",
  })
  @post("{id}")
  static createEia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
