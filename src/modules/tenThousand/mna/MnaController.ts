import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mna")
export default class MnaController {
  @operation({
    summary: "Get Mna",
  })
  @get()
  static getMna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mna",
  })
  @post("{id}")
  static createMna = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
