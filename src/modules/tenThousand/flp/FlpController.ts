import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flps")
export default class FlpController {
  @operation({
    summary: "Get Flps",
  })
  @get()
  static getFlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Flp",
  })
  @post("{id}")
  static createFlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
