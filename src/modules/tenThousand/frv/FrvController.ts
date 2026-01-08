import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frv")
export default class FrvController {
  @operation({
    summary: "Get Frv",
  })
  @get()
  static getFrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frv",
  })
  @post("{id}")
  static createFrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
