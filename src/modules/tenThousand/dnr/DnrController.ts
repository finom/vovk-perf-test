import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnr")
export default class DnrController {
  @operation({
    summary: "Get Dnr",
  })
  @get()
  static getDnr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dnr",
  })
  @post("{id}")
  static createDnr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
