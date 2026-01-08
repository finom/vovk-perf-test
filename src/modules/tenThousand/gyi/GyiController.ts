import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyi")
export default class GyiController {
  @operation({
    summary: "Get Gyi",
  })
  @get()
  static getGyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyi",
  })
  @post("{id}")
  static createGyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
