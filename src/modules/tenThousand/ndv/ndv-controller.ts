import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndv")
export default class NdvController {
  @operation({
    summary: "Get Ndv",
  })
  @get()
  static getNdv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndv",
  })
  @post("{id}")
  static createNdv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
