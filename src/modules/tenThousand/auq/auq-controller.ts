import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auq")
export default class AuqController {
  @operation({
    summary: "Get Auq",
  })
  @get()
  static getAuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Auq",
  })
  @post("{id}")
  static createAuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
