import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbl")
export default class NblController {
  @operation({
    summary: "Get Nbl",
  })
  @get()
  static getNbl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbl",
  })
  @post("{id}")
  static createNbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
