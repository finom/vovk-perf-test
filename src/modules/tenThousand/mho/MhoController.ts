import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mho")
export default class MhoController {
  @operation({
    summary: "Get Mho",
  })
  @get()
  static getMho = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mho",
  })
  @post("{id}")
  static createMho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
