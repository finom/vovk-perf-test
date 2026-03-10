import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gym")
export default class GymController {
  @operation({
    summary: "Get Gym",
  })
  @get()
  static getGym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gym",
  })
  @post("{id}")
  static createGym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
