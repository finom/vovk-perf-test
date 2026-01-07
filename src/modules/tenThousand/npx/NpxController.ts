import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npx")
export default class NpxController {
  @operation({
    summary: "Get Npx",
  })
  @get()
  static getNpx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npx",
  })
  @post("{id}")
  static createNpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
