import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndo")
export default class NdoController {
  @operation({
    summary: "Get Ndo",
  })
  @get()
  static getNdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndo",
  })
  @post("{id}")
  static createNdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
