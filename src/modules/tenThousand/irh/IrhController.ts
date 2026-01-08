import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("irh")
export default class IrhController {
  @operation({
    summary: "Get Irh",
  })
  @get()
  static getIrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irh",
  })
  @post("{id}")
  static createIrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
