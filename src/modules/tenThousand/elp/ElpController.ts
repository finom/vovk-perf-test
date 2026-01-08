import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("elp")
export default class ElpController {
  @operation({
    summary: "Get Elp",
  })
  @get()
  static getElp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elp",
  })
  @post("{id}")
  static createElp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
