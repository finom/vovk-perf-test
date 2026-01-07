import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndy")
export default class NdyController {
  @operation({
    summary: "Get Ndy",
  })
  @get()
  static getNdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndy",
  })
  @post("{id}")
  static createNdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
