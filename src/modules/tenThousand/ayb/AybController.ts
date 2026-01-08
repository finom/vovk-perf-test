import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayb")
export default class AybController {
  @operation({
    summary: "Get Ayb",
  })
  @get()
  static getAyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayb",
  })
  @post("{id}")
  static createAyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
