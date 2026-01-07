import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbu")
export default class MbuController {
  @operation({
    summary: "Get Mbu",
  })
  @get()
  static getMbu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbu",
  })
  @post("{id}")
  static createMbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
