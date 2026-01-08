import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hae")
export default class HaeController {
  @operation({
    summary: "Get Hae",
  })
  @get()
  static getHae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hae",
  })
  @post("{id}")
  static createHae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
