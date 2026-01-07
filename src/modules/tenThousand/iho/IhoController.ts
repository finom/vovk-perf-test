import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iho")
export default class IhoController {
  @operation({
    summary: "Get Iho",
  })
  @get()
  static getIho = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iho",
  })
  @post("{id}")
  static createIho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
