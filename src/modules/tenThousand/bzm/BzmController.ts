import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzm")
export default class BzmController {
  @operation({
    summary: "Get Bzm",
  })
  @get()
  static getBzm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzm",
  })
  @post("{id}")
  static createBzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
