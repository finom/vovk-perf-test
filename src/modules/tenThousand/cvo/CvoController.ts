import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvo")
export default class CvoController {
  @operation({
    summary: "Get Cvo",
  })
  @get()
  static getCvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvo",
  })
  @post("{id}")
  static createCvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
