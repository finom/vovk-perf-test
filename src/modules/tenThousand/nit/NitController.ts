import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nit")
export default class NitController {
  @operation({
    summary: "Get Nit",
  })
  @get()
  static getNit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nit",
  })
  @post("{id}")
  static createNit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
