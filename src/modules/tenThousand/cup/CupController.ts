import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cup")
export default class CupController {
  @operation({
    summary: "Get Cup",
  })
  @get()
  static getCup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cup",
  })
  @post("{id}")
  static createCup = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
