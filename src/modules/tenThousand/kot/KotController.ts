import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kot")
export default class KotController {
  @operation({
    summary: "Get Kot",
  })
  @get()
  static getKot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kot",
  })
  @post("{id}")
  static createKot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
