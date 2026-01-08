import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbc")
export default class DbcController {
  @operation({
    summary: "Get Dbc",
  })
  @get()
  static getDbc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbc",
  })
  @post("{id}")
  static createDbc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
