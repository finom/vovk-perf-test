import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geq")
export default class GeqController {
  @operation({
    summary: "Get Geq",
  })
  @get()
  static getGeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geq",
  })
  @post("{id}")
  static createGeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
