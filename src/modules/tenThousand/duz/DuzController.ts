import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duz")
export default class DuzController {
  @operation({
    summary: "Get Duz",
  })
  @get()
  static getDuz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duz",
  })
  @post("{id}")
  static createDuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
