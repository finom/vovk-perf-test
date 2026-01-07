import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpm")
export default class BpmController {
  @operation({
    summary: "Get Bpm",
  })
  @get()
  static getBpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpm",
  })
  @post("{id}")
  static createBpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
