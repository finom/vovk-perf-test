import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izzes")
export default class IzzController {
  @operation({
    summary: "Get Izzes",
  })
  @get()
  static getIzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izz",
  })
  @post("{id}")
  static createIzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
