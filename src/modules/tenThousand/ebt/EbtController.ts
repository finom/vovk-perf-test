import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ebt")
export default class EbtController {
  @operation({
    summary: "Get Ebt",
  })
  @get()
  static getEbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebt",
  })
  @post("{id}")
  static createEbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
