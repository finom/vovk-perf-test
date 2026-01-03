import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfds")
export default class CfdController {
  @operation({
    summary: "Get Cfds",
  })
  @get()
  static getCfds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfd",
  })
  @post("{id}")
  static createCfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
