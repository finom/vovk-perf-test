import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dni")
export default class DniController {
  @operation({
    summary: "Get Dni",
  })
  @get()
  static getDni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dni",
  })
  @post("{id}")
  static createDni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
