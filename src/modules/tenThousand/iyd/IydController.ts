import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyd")
export default class IydController {
  @operation({
    summary: "Get Iyd",
  })
  @get()
  static getIyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyd",
  })
  @post("{id}")
  static createIyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
