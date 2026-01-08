import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idh")
export default class IdhController {
  @operation({
    summary: "Get Idh",
  })
  @get()
  static getIdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idh",
  })
  @post("{id}")
  static createIdh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
