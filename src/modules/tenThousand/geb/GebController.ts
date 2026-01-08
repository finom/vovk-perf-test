import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("geb")
export default class GebController {
  @operation({
    summary: "Get Geb",
  })
  @get()
  static getGeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Geb",
  })
  @post("{id}")
  static createGeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
