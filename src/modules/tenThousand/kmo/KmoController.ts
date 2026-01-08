import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmo")
export default class KmoController {
  @operation({
    summary: "Get Kmo",
  })
  @get()
  static getKmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kmo",
  })
  @post("{id}")
  static createKmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
