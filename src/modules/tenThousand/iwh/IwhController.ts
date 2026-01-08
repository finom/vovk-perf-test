import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iwh")
export default class IwhController {
  @operation({
    summary: "Get Iwh",
  })
  @get()
  static getIwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwh",
  })
  @post("{id}")
  static createIwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
