import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzes")
export default class KzeController {
  @operation({
    summary: "Get Kzes",
  })
  @get()
  static getKzes = procedure({
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
