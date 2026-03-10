import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nog")
export default class NogController {
  @operation({
    summary: "Get Nog",
  })
  @get()
  static getNog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nog",
  })
  @post("{id}")
  static createNog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
