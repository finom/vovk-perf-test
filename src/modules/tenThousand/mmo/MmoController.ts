import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmo")
export default class MmoController {
  @operation({
    summary: "Get Mmo",
  })
  @get()
  static getMmo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmo",
  })
  @post("{id}")
  static createMmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
