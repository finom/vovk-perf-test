import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elq")
export default class ElqController {
  @operation({
    summary: "Get Elq",
  })
  @get()
  static getElq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elq",
  })
  @post("{id}")
  static createElq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
