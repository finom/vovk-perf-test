import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksh")
export default class KshController {
  @operation({
    summary: "Get Ksh",
  })
  @get()
  static getKsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksh",
  })
  @post("{id}")
  static createKsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
