import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iec")
export default class IecController {
  @operation({
    summary: "Get Iec",
  })
  @get()
  static getIec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iec",
  })
  @post("{id}")
  static createIec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
