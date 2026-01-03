import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mejs")
export default class MejController {
  @operation({
    summary: "Get Mejs",
  })
  @get()
  static getMejs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mej",
  })
  @post("{id}")
  static createMej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
