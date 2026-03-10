import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndx")
export default class NdxController {
  @operation({
    summary: "Get Ndx",
  })
  @get()
  static getNdx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndx",
  })
  @post("{id}")
  static createNdx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
