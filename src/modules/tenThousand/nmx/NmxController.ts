import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmx")
export default class NmxController {
  @operation({
    summary: "Get Nmx",
  })
  @get()
  static getNmx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmx",
  })
  @post("{id}")
  static createNmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
