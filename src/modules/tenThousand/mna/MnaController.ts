import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mna")
export default class MnaController {
  @operation({
    summary: "Get Mna",
  })
  @get()
  static getMna = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mna",
  })
  @post("{id}")
  static createMna = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
