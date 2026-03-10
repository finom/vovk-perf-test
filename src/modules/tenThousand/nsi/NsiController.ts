import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nsi")
export default class NsiController {
  @operation({
    summary: "Get Nsi",
  })
  @get()
  static getNsi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nsi",
  })
  @post("{id}")
  static createNsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
