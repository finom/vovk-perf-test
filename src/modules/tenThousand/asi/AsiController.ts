import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asi")
export default class AsiController {
  @operation({
    summary: "Get Asi",
  })
  @get()
  static getAsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asi",
  })
  @post("{id}")
  static createAsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
