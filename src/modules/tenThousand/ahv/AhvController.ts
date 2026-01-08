import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahv")
export default class AhvController {
  @operation({
    summary: "Get Ahv",
  })
  @get()
  static getAhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahv",
  })
  @post("{id}")
  static createAhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
