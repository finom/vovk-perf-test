import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsk")
export default class FskController {
  @operation({
    summary: "Get Fsk",
  })
  @get()
  static getFsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsk",
  })
  @post("{id}")
  static createFsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
