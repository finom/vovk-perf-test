import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bui")
export default class BuiController {
  @operation({
    summary: "Get Bui",
  })
  @get()
  static getBui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bui",
  })
  @post("{id}")
  static createBui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
