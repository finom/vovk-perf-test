import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gih")
export default class GihController {
  @operation({
    summary: "Get Gih",
  })
  @get()
  static getGih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gih",
  })
  @post("{id}")
  static createGih = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
