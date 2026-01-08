import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpo")
export default class KpoController {
  @operation({
    summary: "Get Kpo",
  })
  @get()
  static getKpo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpo",
  })
  @post("{id}")
  static createKpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
