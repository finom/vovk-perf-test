import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hak")
export default class HakController {
  @operation({
    summary: "Get Hak",
  })
  @get()
  static getHak = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hak",
  })
  @post("{id}")
  static createHak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
