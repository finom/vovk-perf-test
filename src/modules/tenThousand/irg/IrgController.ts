import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irg")
export default class IrgController {
  @operation({
    summary: "Get Irg",
  })
  @get()
  static getIrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irg",
  })
  @post("{id}")
  static createIrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
