import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("klt")
export default class KltController {
  @operation({
    summary: "Get Klt",
  })
  @get()
  static getKlt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Klt",
  })
  @post("{id}")
  static createKlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
