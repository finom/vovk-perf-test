import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gah")
export default class GahController {
  @operation({
    summary: "Get Gah",
  })
  @get()
  static getGah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gah",
  })
  @post("{id}")
  static createGah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
