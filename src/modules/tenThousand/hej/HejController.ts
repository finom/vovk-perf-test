import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hej")
export default class HejController {
  @operation({
    summary: "Get Hej",
  })
  @get()
  static getHej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hej",
  })
  @post("{id}")
  static createHej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
