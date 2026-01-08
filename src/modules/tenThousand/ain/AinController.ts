import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ain")
export default class AinController {
  @operation({
    summary: "Get Ain",
  })
  @get()
  static getAin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ain",
  })
  @post("{id}")
  static createAin = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
