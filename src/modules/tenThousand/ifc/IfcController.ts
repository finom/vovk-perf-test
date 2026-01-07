import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifc")
export default class IfcController {
  @operation({
    summary: "Get Ifc",
  })
  @get()
  static getIfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifc",
  })
  @post("{id}")
  static createIfc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
