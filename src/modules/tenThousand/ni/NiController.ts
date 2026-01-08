import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ni")
export default class NiController {
  @operation({
    summary: "Get Ni",
  })
  @get()
  static getNi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ni",
  })
  @post("{id}")
  static createNi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
