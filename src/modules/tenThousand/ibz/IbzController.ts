import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibz")
export default class IbzController {
  @operation({
    summary: "Get Ibz",
  })
  @get()
  static getIbz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibz",
  })
  @post("{id}")
  static createIbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
