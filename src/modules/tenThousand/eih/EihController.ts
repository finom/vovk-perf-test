import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eih")
export default class EihController {
  @operation({
    summary: "Get Eih",
  })
  @get()
  static getEih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eih",
  })
  @post("{id}")
  static createEih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
