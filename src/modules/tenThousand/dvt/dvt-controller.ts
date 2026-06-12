import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvt")
export default class DvtController {
  @operation({
    summary: "Get Dvt",
  })
  @get()
  static getDvt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvt",
  })
  @post("{id}")
  static createDvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
