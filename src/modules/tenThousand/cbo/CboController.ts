import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbo")
export default class CboController {
  @operation({
    summary: "Get Cbo",
  })
  @get()
  static getCbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbo",
  })
  @post("{id}")
  static createCbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
