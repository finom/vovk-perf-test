import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kze")
export default class KzeController {
  @operation({
    summary: "Get Kze",
  })
  @get()
  static getKze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kze",
  })
  @post("{id}")
  static createKze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
