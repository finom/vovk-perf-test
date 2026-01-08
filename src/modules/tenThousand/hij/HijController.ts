import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hij")
export default class HijController {
  @operation({
    summary: "Get Hij",
  })
  @get()
  static getHij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hij",
  })
  @post("{id}")
  static createHij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
