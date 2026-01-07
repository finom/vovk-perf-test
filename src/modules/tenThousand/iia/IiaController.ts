import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iia")
export default class IiaController {
  @operation({
    summary: "Get Iia",
  })
  @get()
  static getIia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iia",
  })
  @post("{id}")
  static createIia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
