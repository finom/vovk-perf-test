import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keos")
export default class KeoController {
  @operation({
    summary: "Get Keos",
  })
  @get()
  static getKeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Keo",
  })
  @post("{id}")
  static createKeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
