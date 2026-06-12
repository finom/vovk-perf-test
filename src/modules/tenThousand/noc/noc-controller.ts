import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("noc")
export default class NocController {
  @operation({
    summary: "Get Noc",
  })
  @get()
  static getNoc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Noc",
  })
  @post("{id}")
  static createNoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
