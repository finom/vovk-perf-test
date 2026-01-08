import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ich")
export default class IchController {
  @operation({
    summary: "Get Ich",
  })
  @get()
  static getIch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ich",
  })
  @post("{id}")
  static createIch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
