import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azt")
export default class AztController {
  @operation({
    summary: "Get Azt",
  })
  @get()
  static getAzt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azt",
  })
  @post("{id}")
  static createAzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
