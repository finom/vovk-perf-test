import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gym")
export default class GymController {
  @operation({
    summary: "Get Gym",
  })
  @get()
  static getGym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gym",
  })
  @post("{id}")
  static createGym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
