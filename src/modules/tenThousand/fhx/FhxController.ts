import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhx")
export default class FhxController {
  @operation({
    summary: "Get Fhx",
  })
  @get()
  static getFhx = procedure({
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
