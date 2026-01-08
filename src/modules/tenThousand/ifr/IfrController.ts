import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifr")
export default class IfrController {
  @operation({
    summary: "Get Ifr",
  })
  @get()
  static getIfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifr",
  })
  @post("{id}")
  static createIfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
