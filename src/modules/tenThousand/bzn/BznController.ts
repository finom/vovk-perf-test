import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzn")
export default class BznController {
  @operation({
    summary: "Get Bzn",
  })
  @get()
  static getBzn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bzn",
  })
  @post("{id}")
  static createBzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
