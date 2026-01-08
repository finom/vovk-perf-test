import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eia")
export default class EiaController {
  @operation({
    summary: "Get Eia",
  })
  @get()
  static getEia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eia",
  })
  @post("{id}")
  static createEia = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
