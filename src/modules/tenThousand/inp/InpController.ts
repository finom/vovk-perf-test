import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inp")
export default class InpController {
  @operation({
    summary: "Get Inp",
  })
  @get()
  static getInp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inp",
  })
  @post("{id}")
  static createInp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
