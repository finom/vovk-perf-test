import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izc")
export default class IzcController {
  @operation({
    summary: "Get Izc",
  })
  @get()
  static getIzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izc",
  })
  @post("{id}")
  static createIzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
