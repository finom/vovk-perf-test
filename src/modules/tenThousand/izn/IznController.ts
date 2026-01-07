import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izn")
export default class IznController {
  @operation({
    summary: "Get Izn",
  })
  @get()
  static getIzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izn",
  })
  @post("{id}")
  static createIzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
