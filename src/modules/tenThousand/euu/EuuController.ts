import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euus")
export default class EuuController {
  @operation({
    summary: "Get Euus",
  })
  @get()
  static getEuus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euu",
  })
  @post("{id}")
  static createEuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
