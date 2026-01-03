import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qos")
export default class QoController {
  @operation({
    summary: "Get Qos",
  })
  @get()
  static getQos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qo",
  })
  @post("{id}")
  static createQo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
