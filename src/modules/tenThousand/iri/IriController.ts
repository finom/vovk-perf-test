import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iri")
export default class IriController {
  @operation({
    summary: "Get Iri",
  })
  @get()
  static getIri = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iri",
  })
  @post("{id}")
  static createIri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
