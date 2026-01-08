import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eht")
export default class EhtController {
  @operation({
    summary: "Get Eht",
  })
  @get()
  static getEht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eht",
  })
  @post("{id}")
  static createEht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
