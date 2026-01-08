import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jry")
export default class JryController {
  @operation({
    summary: "Get Jry",
  })
  @get()
  static getJry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jry",
  })
  @post("{id}")
  static createJry = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
