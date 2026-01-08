import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npe")
export default class NpeController {
  @operation({
    summary: "Get Npe",
  })
  @get()
  static getNpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npe",
  })
  @post("{id}")
  static createNpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
