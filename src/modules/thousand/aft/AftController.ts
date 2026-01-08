import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aft")
export default class AftController {
  @operation({
    summary: "Get Aft",
  })
  @get()
  static getAft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aft",
  })
  @post("{id}")
  static createAft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
