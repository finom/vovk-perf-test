import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izc")
export default class IzcController {
  @operation({
    summary: "Get Izc",
  })
  @get()
  static getIzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izc",
  })
  @post("{id}")
  static createIzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
