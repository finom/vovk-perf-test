import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cae")
export default class CaeController {
  @operation({
    summary: "Get Cae",
  })
  @get()
  static getCae = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cae",
  })
  @post("{id}")
  static createCae = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
