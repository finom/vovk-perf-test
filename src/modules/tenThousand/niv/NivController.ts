import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niv")
export default class NivController {
  @operation({
    summary: "Get Niv",
  })
  @get()
  static getNiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Niv",
  })
  @post("{id}")
  static createNiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
