import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifos")
export default class IfoController {
  @operation({
    summary: "Get Ifos",
  })
  @get()
  static getIfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifo",
  })
  @post("{id}")
  static createIfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
