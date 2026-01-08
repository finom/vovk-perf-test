import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gny")
export default class GnyController {
  @operation({
    summary: "Get Gny",
  })
  @get()
  static getGny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gny",
  })
  @post("{id}")
  static createGny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
