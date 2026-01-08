import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iai")
export default class IaiController {
  @operation({
    summary: "Get Iai",
  })
  @get()
  static getIai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iai",
  })
  @post("{id}")
  static createIai = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
