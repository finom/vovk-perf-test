import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fahs")
export default class FahController {
  @operation({
    summary: "Get Fahs",
  })
  @get()
  static getFahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fah",
  })
  @post("{id}")
  static createFah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
