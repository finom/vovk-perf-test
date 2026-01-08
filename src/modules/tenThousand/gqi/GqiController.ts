import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqi")
export default class GqiController {
  @operation({
    summary: "Get Gqi",
  })
  @get()
  static getGqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqi",
  })
  @post("{id}")
  static createGqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
