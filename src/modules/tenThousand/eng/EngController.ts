import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eng")
export default class EngController {
  @operation({
    summary: "Get Eng",
  })
  @get()
  static getEng = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eng",
  })
  @post("{id}")
  static createEng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
