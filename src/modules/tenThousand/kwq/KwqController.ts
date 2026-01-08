import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwq")
export default class KwqController {
  @operation({
    summary: "Get Kwq",
  })
  @get()
  static getKwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwq",
  })
  @post("{id}")
  static createKwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
