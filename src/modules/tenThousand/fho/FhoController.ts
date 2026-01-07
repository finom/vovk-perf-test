import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fho")
export default class FhoController {
  @operation({
    summary: "Get Fho",
  })
  @get()
  static getFho = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fho",
  })
  @post("{id}")
  static createFho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
