import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myo")
export default class MyoController {
  @operation({
    summary: "Get Myo",
  })
  @get()
  static getMyo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myo",
  })
  @post("{id}")
  static createMyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
