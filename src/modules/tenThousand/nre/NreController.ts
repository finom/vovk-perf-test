import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nre")
export default class NreController {
  @operation({
    summary: "Get Nre",
  })
  @get()
  static getNre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nre",
  })
  @post("{id}")
  static createNre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
