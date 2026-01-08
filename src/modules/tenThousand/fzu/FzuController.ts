import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzu")
export default class FzuController {
  @operation({
    summary: "Get Fzu",
  })
  @get()
  static getFzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fzu",
  })
  @post("{id}")
  static createFzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
