import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyd")
export default class EydController {
  @operation({
    summary: "Get Eyd",
  })
  @get()
  static getEyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyd",
  })
  @post("{id}")
  static createEyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
