import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izg")
export default class IzgController {
  @operation({
    summary: "Get Izg",
  })
  @get()
  static getIzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izg",
  })
  @post("{id}")
  static createIzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
