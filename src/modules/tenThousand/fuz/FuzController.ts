import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuz")
export default class FuzController {
  @operation({
    summary: "Get Fuz",
  })
  @get()
  static getFuz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuz",
  })
  @post("{id}")
  static createFuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
