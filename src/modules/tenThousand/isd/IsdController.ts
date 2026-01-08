import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isd")
export default class IsdController {
  @operation({
    summary: "Get Isd",
  })
  @get()
  static getIsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isd",
  })
  @post("{id}")
  static createIsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
