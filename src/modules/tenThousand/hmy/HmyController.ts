import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmy")
export default class HmyController {
  @operation({
    summary: "Get Hmy",
  })
  @get()
  static getHmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hmy",
  })
  @post("{id}")
  static createHmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
