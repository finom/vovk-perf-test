import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eul")
export default class EulController {
  @operation({
    summary: "Get Eul",
  })
  @get()
  static getEul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eul",
  })
  @post("{id}")
  static createEul = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
