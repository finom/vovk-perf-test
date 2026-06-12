import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndg")
export default class NdgController {
  @operation({
    summary: "Get Ndg",
  })
  @get()
  static getNdg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndg",
  })
  @post("{id}")
  static createNdg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
