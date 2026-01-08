import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjl")
export default class KjlController {
  @operation({
    summary: "Get Kjl",
  })
  @get()
  static getKjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjl",
  })
  @post("{id}")
  static createKjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
