import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gym")
export default class GymController {
  @operation({
    summary: "Get Gym",
  })
  @get()
  static getGym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gym",
  })
  @post("{id}")
  static createGym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
