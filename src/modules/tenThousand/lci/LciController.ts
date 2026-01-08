import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lci")
export default class LciController {
  @operation({
    summary: "Get Lci",
  })
  @get()
  static getLci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lci",
  })
  @post("{id}")
  static createLci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
