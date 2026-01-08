import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hno")
export default class HnoController {
  @operation({
    summary: "Get Hno",
  })
  @get()
  static getHno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hno",
  })
  @post("{id}")
  static createHno = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
