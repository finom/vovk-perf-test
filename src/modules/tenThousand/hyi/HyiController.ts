import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyi")
export default class HyiController {
  @operation({
    summary: "Get Hyi",
  })
  @get()
  static getHyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyi",
  })
  @post("{id}")
  static createHyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
