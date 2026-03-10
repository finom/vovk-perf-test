import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdb")
export default class CdbController {
  @operation({
    summary: "Get Cdb",
  })
  @get()
  static getCdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cdb",
  })
  @post("{id}")
  static createCdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
