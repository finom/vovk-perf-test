import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daw")
export default class DawController {
  @operation({
    summary: "Get Daw",
  })
  @get()
  static getDaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Daw",
  })
  @post("{id}")
  static createDaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
