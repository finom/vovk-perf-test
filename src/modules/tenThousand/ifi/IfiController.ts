import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifi")
export default class IfiController {
  @operation({
    summary: "Get Ifi",
  })
  @get()
  static getIfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifi",
  })
  @post("{id}")
  static createIfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
