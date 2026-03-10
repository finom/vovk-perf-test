import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bib")
export default class BibController {
  @operation({
    summary: "Get Bib",
  })
  @get()
  static getBib = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bib",
  })
  @post("{id}")
  static createBib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
