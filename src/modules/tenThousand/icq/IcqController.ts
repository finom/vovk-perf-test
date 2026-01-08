import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icq")
export default class IcqController {
  @operation({
    summary: "Get Icq",
  })
  @get()
  static getIcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icq",
  })
  @post("{id}")
  static createIcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
