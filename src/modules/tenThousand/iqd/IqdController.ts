import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iqd")
export default class IqdController {
  @operation({
    summary: "Get Iqd",
  })
  @get()
  static getIqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqd",
  })
  @post("{id}")
  static createIqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
