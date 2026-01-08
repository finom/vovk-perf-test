import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kef")
export default class KefController {
  @operation({
    summary: "Get Kef",
  })
  @get()
  static getKef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kef",
  })
  @post("{id}")
  static createKef = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
