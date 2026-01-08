import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoj")
export default class HojController {
  @operation({
    summary: "Get Hoj",
  })
  @get()
  static getHoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoj",
  })
  @post("{id}")
  static createHoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
