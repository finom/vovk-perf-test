import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fff")
export default class FffController {
  @operation({
    summary: "Get Fff",
  })
  @get()
  static getFff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fff",
  })
  @post("{id}")
  static createFff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
