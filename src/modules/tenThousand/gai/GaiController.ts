import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gai")
export default class GaiController {
  @operation({
    summary: "Get Gai",
  })
  @get()
  static getGai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gai",
  })
  @post("{id}")
  static createGai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
