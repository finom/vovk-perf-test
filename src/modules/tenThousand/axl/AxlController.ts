import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("axl")
export default class AxlController {
  @operation({
    summary: "Get Axl",
  })
  @get()
  static getAxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axl",
  })
  @post("{id}")
  static createAxl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
