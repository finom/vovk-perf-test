import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqf")
export default class IqfController {
  @operation({
    summary: "Get Iqf",
  })
  @get()
  static getIqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqf",
  })
  @post("{id}")
  static createIqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
