import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqds")
export default class IqdController {
  @operation({
    summary: "Get Iqds",
  })
  @get()
  static getIqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqd",
  })
  @post("{id}")
  static createIqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
