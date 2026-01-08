import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aau")
export default class AauController {
  @operation({
    summary: "Get Aau",
  })
  @get()
  static getAau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aau",
  })
  @post("{id}")
  static createAau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
