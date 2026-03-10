import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndm")
export default class NdmController {
  @operation({
    summary: "Get Ndm",
  })
  @get()
  static getNdm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndm",
  })
  @post("{id}")
  static createNdm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
