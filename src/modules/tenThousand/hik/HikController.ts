import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hik")
export default class HikController {
  @operation({
    summary: "Get Hik",
  })
  @get()
  static getHik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hik",
  })
  @post("{id}")
  static createHik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
