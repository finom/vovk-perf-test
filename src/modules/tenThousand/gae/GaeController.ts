import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gae")
export default class GaeController {
  @operation({
    summary: "Get Gae",
  })
  @get()
  static getGae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gae",
  })
  @post("{id}")
  static createGae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
