import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asn")
export default class AsnController {
  @operation({
    summary: "Get Asn",
  })
  @get()
  static getAsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asn",
  })
  @post("{id}")
  static createAsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
