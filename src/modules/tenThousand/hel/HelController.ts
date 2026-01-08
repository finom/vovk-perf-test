import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hel")
export default class HelController {
  @operation({
    summary: "Get Hel",
  })
  @get()
  static getHel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hel",
  })
  @post("{id}")
  static createHel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
