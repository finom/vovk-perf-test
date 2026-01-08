import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrh")
export default class HrhController {
  @operation({
    summary: "Get Hrh",
  })
  @get()
  static getHrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrh",
  })
  @post("{id}")
  static createHrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
