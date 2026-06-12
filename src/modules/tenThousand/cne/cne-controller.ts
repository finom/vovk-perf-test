import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cne")
export default class CneController {
  @operation({
    summary: "Get Cne",
  })
  @get()
  static getCne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cne",
  })
  @post("{id}")
  static createCne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
