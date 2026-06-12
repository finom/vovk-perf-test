import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndb")
export default class NdbController {
  @operation({
    summary: "Get Ndb",
  })
  @get()
  static getNdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndb",
  })
  @post("{id}")
  static createNdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
