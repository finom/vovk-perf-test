import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqv")
export default class IqvController {
  @operation({
    summary: "Get Iqv",
  })
  @get()
  static getIqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqv",
  })
  @post("{id}")
  static createIqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
