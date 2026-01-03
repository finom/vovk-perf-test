import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfds")
export default class DfdController {
  @operation({
    summary: "Get Dfds",
  })
  @get()
  static getDfds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfd",
  })
  @post("{id}")
  static createDfd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
