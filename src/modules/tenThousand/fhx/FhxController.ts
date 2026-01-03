import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhxes")
export default class FhxController {
  @operation({
    summary: "Get Fhxes",
  })
  @get()
  static getFhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhx",
  })
  @post("{id}")
  static createFhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
