import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cve")
export default class CveController {
  @operation({
    summary: "Get Cve",
  })
  @get()
  static getCve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cve",
  })
  @post("{id}")
  static createCve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
