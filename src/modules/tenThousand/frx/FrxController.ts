import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frx")
export default class FrxController {
  @operation({
    summary: "Get Frx",
  })
  @get()
  static getFrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frx",
  })
  @post("{id}")
  static createFrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
