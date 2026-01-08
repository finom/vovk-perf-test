import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ino")
export default class InoController {
  @operation({
    summary: "Get Ino",
  })
  @get()
  static getIno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ino",
  })
  @post("{id}")
  static createIno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
