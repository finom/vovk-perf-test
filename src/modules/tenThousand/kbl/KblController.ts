import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbl")
export default class KblController {
  @operation({
    summary: "Get Kbl",
  })
  @get()
  static getKbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbl",
  })
  @post("{id}")
  static createKbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
