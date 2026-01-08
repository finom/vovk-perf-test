import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aue")
export default class AueController {
  @operation({
    summary: "Get Aue",
  })
  @get()
  static getAue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aue",
  })
  @post("{id}")
  static createAue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
