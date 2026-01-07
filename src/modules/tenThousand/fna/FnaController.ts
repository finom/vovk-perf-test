import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fna")
export default class FnaController {
  @operation({
    summary: "Get Fna",
  })
  @get()
  static getFna = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fna",
  })
  @post("{id}")
  static createFna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
